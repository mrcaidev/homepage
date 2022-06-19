import axios from "axios";
import repoNames from "src/data/repos.json";
import { defaultStats, Repo, Stats, TopLang } from "src/models/stats.model";

// Constants for AJAX.
const API_URL = "https://api.github.com/graphql";
const OAUTH_TOKEN = `token ${process.env.GITHUB_TOKEN ?? ""}`;

// Constants for query.
const USER_NAME = "mrcaidev";
const REPO_COUNT = 100;
const LANG_NUM_EACH_REPO = 10;

// Constants for data process.
const DEFAULT_LANG_NAME = "Unknown";
const DEFAULT_LANG_COLOR = "gray.500";

const query = `
query {
  user(login: "${USER_NAME}") {
    repositories(
      first: ${REPO_COUNT},
      isFork: false,
      ownerAffiliations: OWNER
    ) {
      totalCount,
      nodes {
        name
        stargazerCount,
        forkCount,
        description
        languages(
          first: ${LANG_NUM_EACH_REPO},
          orderBy: { field: SIZE, direction: DESC }
        ){
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

async function queryGithub() {
  const res = await axios.post<GithubResponse>(
    API_URL,
    { query },
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": OAUTH_TOKEN,
      },
    }
  );
  return res.data;
}

export async function getStats() {
  try {
    // Query GitHub API.
    const {
      data: {
        user: {
          repositories: { totalCount, nodes: repositories },
        },
      },
    } = await queryGithub();

    // Data vectors.
    let totalStars = 0;
    let totalForks = 0;
    let totalLangSize = 0;
    const langSizeRecord: Record<string, number> = {};
    const repos: Repo[] = new Array(repoNames.length);

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

        // If this repository is wanted, record its details.
        const wantedIndex = repoNames.findIndex(repo => repo === name);
        if (wantedIndex !== -1) {
          repos[wantedIndex] = {
            name,
            stars: stargazerCount,
            forks: forkCount,
            description,
            lang: {
              name: langs[0]?.node?.name ?? "",
              color: langs[0]?.node?.color ?? "",
            },
          };
        }

        // Record each language's size in this repository.
        langs.forEach(({ size, node: { name } }) => {
          totalLangSize += size;
          langSizeRecord[name] = (langSizeRecord[name] ?? 0) + size;
        });
      }
    );

    // Convert language size record to array and sort it by size.
    const topLangs: TopLang[] = Object.entries(langSizeRecord)
      .sort((a, b) => b[1] - a[1])
      .map(lang => ({
        name: lang[0],
        percentage: +((100 * lang[1]) / totalLangSize).toFixed(2),
      }));

    // Format it as final data model.
    return {
      githubStats: {
        count: totalCount,
        stars: totalStars,
        forks: totalForks,
      },
      topLangs,
      repos,
      success: true,
    } as Stats;
  } catch (e) {
    return defaultStats as Stats;
  }
}
