export interface GithubStats {
  count: number | null;
  stars: number | null;
  forks: number | null;
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
