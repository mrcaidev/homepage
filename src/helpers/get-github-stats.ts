import { GithubStats } from "src/models/stats.model";
import { queryGithub } from "src/utils/requests";

interface Response {
  data: {
    user: {
      repositories: {
        totalCount: number;
        nodes: { stargazerCount: number; forkCount: number }[];
      };
    };
  };
}

const query = `
  query {
    user(login: "mrcaidev") {
      repositories(first: 100) {
        totalCount,
        nodes {
          stargazerCount,
          forkCount
        }
      }
    }
  }
`;

export async function getGithubStats() {
  try {
    const {
      data: {
        user: {
          repositories: { totalCount: count, nodes },
        },
      },
    } = await queryGithub<Response>(query);

    const { stargazerCount: stars, forkCount: forks } = nodes.reduce(
      (pre, cur) => ({
        stargazerCount: pre.stargazerCount + cur.stargazerCount,
        forkCount: pre.forkCount + cur.forkCount,
      })
    );

    return { count, stars, forks } as GithubStats;
  } catch (e) {
    console.error(e);
    return { count: null, stars: null, forks: null } as GithubStats;
  }
}
