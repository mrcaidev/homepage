export interface GithubStats {
  count: number;
  stars: number;
  forks: number;
}

export interface GithubResponse {
  data: {
    user: {
      repositories: {
        totalCount: number;
        nodes: { stargazerCount: number; forkCount: number }[];
      };
    };
  };
}
