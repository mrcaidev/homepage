import { type ILanguage } from "./language.model";
import { type IProfile } from "./profile.model";
import { type IRepository } from "./repository.model";

export interface IStats {
  profile: IProfile;
  topLangs: ILanguage[];
  repos: IRepository[];
}

export const defaultStats: IStats = {
  profile: {
    count: -1,
    stars: -1,
    forks: -1,
  },
  topLangs: [...Array(8)].map((_, index) => ({
    name: "TypeScript-" + index,
    percentage: ~~(Math.random() * 100),
    color: "#3178c6",
  })),
  repos: [...Array(8)].map((_, index) => ({
    name: "Example-" + index,
    stars: -1,
    forks: -1,
    description: "Loading...",
    language: "TypeScript",
    color: "#3178c6",
  })),
};
