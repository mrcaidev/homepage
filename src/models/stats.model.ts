import repoNames from "src/data/repos.json";

export interface GithubStats {
  count: number;
  stars: number;
  forks: number;
}

export interface TopLang {
  name: string;
  percentage: number;
}

export interface Repo {
  name: string;
  stars: number;
  forks: number;
  description: string;
  lang: {
    name: string;
    color: string;
  };
}

export interface Stats {
  githubStats: GithubStats;
  topLangs: TopLang[];
  repos: Repo[];
  success: boolean;
}

export const defaultStats: Stats = {
  githubStats: {
    count: -1,
    stars: -1,
    forks: -1,
  },
  topLangs: "12345678".split("").map(name => ({ name, percentage: 0 })),
  repos: repoNames.map(repo => ({
    name: repo,
    stars: -1,
    forks: -1,
    description: "Loading...",
    lang: {
      name: "",
      color: "",
    },
  })),
  success: false,
};
