import { GithubResponse, GithubStats } from "src/interfaces/github-stats";

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
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: { authorization: `token ${process.env.GITHUB_TOKEN}` ?? "" },
    });

    if (!res.ok) {
      return { count: -1, stars: -1, forks: -1 } as GithubStats;
    }

    const {
      data: {
        user: {
          repositories: { totalCount: count, nodes },
        },
      },
    }: GithubResponse = await res.json();

    const { stargazerCount: stars, forkCount: forks } = nodes.reduce(
      (pre, cur) => ({
        stargazerCount: pre.stargazerCount + cur.stargazerCount,
        forkCount: pre.forkCount + cur.forkCount,
      })
    );

    return { count, stars, forks } as GithubStats;
  } catch {
    return { count: -1, stars: -1, forks: -1 } as GithubStats;
  }
}
