export interface Profile {
  count: number;
  stars: number;
  forks: number;
}

export interface TopLang {
  name: string;
  percentage: number;
  color: string;
}

export interface Repo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  color: string;
}

export interface Stats {
  profile: Profile;
  topLangs: TopLang[];
  repos: Repo[];
}

export const defaultStats: Stats = {
  profile: {
    count: -1,
    stars: -1,
    forks: -1,
  },
  topLangs: [...Array(8)].map(() => ({
    name: "TypeScript",
    percentage: ~~(Math.random() * 100),
    color: "#3178c6",
  })),
  repos: [...Array(8)].map(() => ({
    name: "Example",
    stars: -1,
    forks: -1,
    description: "Loading...",
    language: "TypeScript",
    color: "#3178c6",
  })),
};
