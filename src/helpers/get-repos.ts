import repoNames from "src/data/repos.json";
import { Repo } from "src/models/stats.model";
import { queryGithub } from "src/utils/requests";

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
  query ($repo: String!) {
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
      repoNames.map(repo => queryGithub<Response>(query, { repo }))
    );

    const repos: Repo[] = resList.map(
      ({
        data: {
          user: {
            repository: {
              description,
              forkCount: forks,
              name,
              stargazers: { totalCount: stars },
              primaryLanguage: lang,
            },
          },
        },
      }) => ({ name, description, forks, stars, lang })
    );

    return repos;
  } catch (e) {
    console.error(e);
    return [] as Repo[];
  }
}
