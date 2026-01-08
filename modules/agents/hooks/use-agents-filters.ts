// modules/agents/use-agents-filters.ts
"use client";

import { useQueryStates } from "nuqs";
import { filtersSearchParams } from "../params";

export const useAgentsFilters = () => {
  // Returns [state, setState] tuple from NuQS
  return useQueryStates(filtersSearchParams);
};
