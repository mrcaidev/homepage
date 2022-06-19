export interface GithubStats {
  count: number | null;
  stars: number | null;
  forks: number | null;
}

export interface TopLang {
  name: string | null;
  percentage: number | null;
}

export interface Repo {
  name: string | null;
  stars: number | null;
  forks: number | null;
  description: string | null;
  lang: {
    name: string | null;
    color: string | null;
  };
}

export interface Stats {
  githubStats: GithubStats;
  topLangs: TopLang[];
  repos: Repo[];
}
