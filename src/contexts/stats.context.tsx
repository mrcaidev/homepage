import { createContext } from "react";
import { defaultStats, Stats } from "src/models/stats.model";

export const StatsContext = createContext<Stats>(defaultStats);
export const StatsProvider = StatsContext.Provider;
