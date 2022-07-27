import { useContext } from "react";
import { StatsContext } from "src/contexts/stats.context";

export function useStats() {
  return useContext(StatsContext);
}
