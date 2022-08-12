import repoNames from "src/data/repositories.json";
import { type ILanguage } from "src/models/language.model";
import { type IRepository } from "src/models/repository.model";
import { defaultStats, type IStats } from "src/models/stats.model";

// Constants.
const API_URL = "https://api.github.com/graphql";
const OAUTH_TOKEN = "token " + process.env.GITHUB_TOKEN;
const DEFAULT_LANG = "Unknown";
const DEFAULT_COLOR = "#9ac8e2";
const LANG_NUM = 8;

// GraphQL query.
const query = `
query {
  user(login: "mrcaidev") {
    repositories(first: 100, isFork: false, ownerAffiliations: OWNER) {
      totalCount,
      nodes {
        name
        stargazerCount,
        forkCount,
        description
        languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
          edges {
            size
            node {
              name
              color
            }
          }
        }
      }
    }
  }
}
`;

interface GithubResponse {
  data: {
    user: {
      repositories: {
        totalCount: number;
        nodes: {
          name: string;
          stargazerCount: number;
          forkCount: number;
          description: string;
          languages: {
            edges: {
              size: number;
              node: {
                name: string;
                color: string;
              };
            }[];
          };
        }[];
      };
    };
  };
}

export const getStats = async () => {
  if (process.env.NODE_ENV !== "production") {
    return defaultStats;
  }

  try {
    // Query GitHub API.
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
        Authorization: OAUTH_TOKEN,
      },
    });
    const {
      data: {
        user: {
          repositories: { totalCount, nodes: repositories },
        },
      },
    }: GithubResponse = await res.json();

    // Data vectors.
    let totalStars = 0;
    let totalForks = 0;
    let totalLangSize = 0;
    const langColorMap: Record<string, string> = {};
    const langSizeMap: Record<string, number> = {};
    const repos: IRepository[] = Array(repoNames.length);

    // Traverse all repositories.
    repositories.forEach(
      ({
        name,
        stargazerCount,
        forkCount,
        description,
        languages: { edges: langs },
      }) => {
        // Add up to total stars and forks.
        totalStars += stargazerCount;
        totalForks += forkCount;

        // Add up to total language size, and record language color.
        langs.forEach(({ size, node: { name, color } }) => {
          totalLangSize += size;
          langSizeMap[name] = (langSizeMap[name] ?? 0) + size;
          langColorMap[name] = color;
        });

        // If this repository is wanted, record its details.
        const wantedIndex = repoNames.findIndex((repo) => repo === name);
        if (wantedIndex === -1) {
          return;
        }
        repos[wantedIndex] = {
          name,
          stars: stargazerCount,
          forks: forkCount,
          description,
          language: langs[0]?.node?.name ?? DEFAULT_LANG,
          color: langs[0]?.node?.color ?? DEFAULT_COLOR,
        };
      }
    );

    // Convert language size record to array and sort it by size.
    const topLangs: ILanguage[] = Object.entries(langSizeMap)
      .sort((a, b) => b[1] - a[1])
      .map((lang) => ({
        name: lang[0],
        percentage: +((100 * lang[1]) / totalLangSize).toFixed(2),
        color: langColorMap[lang[0]] ?? DEFAULT_COLOR,
      }))
      .slice(0, LANG_NUM);

    // Format it as final data model.
    const stats: IStats = {
      profile: {
        count: totalCount,
        stars: totalStars,
        forks: totalForks,
      },
      topLangs,
      repos,
    };
    return stats;
  } catch {
    return defaultStats as IStats;
  }
};
