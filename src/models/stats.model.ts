export interface GithubStats {
  count: number | null;
  stars: number | null;
  forks: number | null;
}

export interface TopLang {
  name: string;
  color: string;
  percentage: number;
}

export interface Stats {
  githubStats: GithubStats;
  topLangs: TopLang[];
}
