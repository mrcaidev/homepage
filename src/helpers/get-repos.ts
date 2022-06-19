import repoNames from "src/data/repos.json";
import { Repo } from "src/models/stats.model";

interface Response {
  data: {
    user: {
      repository: {
        name: string;
        description: string;
        stargazers: {
          totalCount: number;
        };
        forkCount: number;
        primaryLanguage: {
          color: string;
          name: string;
        };
      };
    };
  };
}

const query = `
  query getRepo($repo: String!) {
    user(login: "mrcaidev") {
      repository(name: $repo) {
        name
        description
        stargazers {
          totalCount
        }
        forkCount
        primaryLanguage {
          color
          name
        }
      }
    }
  }
`;

export async function getRepos() {
  try {
    const resList = await Promise.all(
      repoNames.map(repo =>
        fetch("https://api.github.com/graphql", {
          method: "POST",
          body: JSON.stringify({ query, variables: { repo } }),
          headers: { authorization: `token ${process.env.GITHUB_TOKEN}` ?? "" },
        })
      )
    );

    const repos: Repo[] = await Promise.all(
      resList.map(async res => {
        if (!res.ok) {
          return {
            name: null,
            stars: null,
            forks: null,
            description: null,
            lang: {
              color: null,
              name: null,
            },
          } as Repo;
        }
        const {
          data: {
            user: {
              repository: {
                description,
                forkCount,
                name,
                stargazers: { totalCount },
                primaryLanguage,
              },
            },
          },
        }: Response = await res.json();
        return {
          name,
          description,
          forks: forkCount,
          stars: totalCount,
          lang: primaryLanguage,
        };
      })
    );

    return repos;
  } catch {
    return [] as Repo[];
  }
}
