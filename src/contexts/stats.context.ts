import { createContext, useContext } from "react";
import { Stats } from "src/models/stats.model";

const defaultContext: Stats = {
  githubStats: {
    count: null,
    forks: null,
    stars: null,
  },
  topLangs: [],
  repos: [],
};

export const StatsContext = createContext<Stats>(defaultContext);

export const useStatsContext = () => useContext(StatsContext);
