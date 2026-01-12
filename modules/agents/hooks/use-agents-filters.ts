// modules/agents/use-agents-filters.ts
// "use client";

import { DEFAULT_PAGE } from "@/constant"
import { parseAsString, parseAsInteger, useQueryState, useQueryStates } from "nuqs"

// import { useQueryStates } from "nuqs";
// import { filtersSearchParams } from "../params";

// export const useAgentsFilters = () => {
//   // Returns [state, setState] tuple from NuQS
//   return useQueryStates(filtersSearchParams);
// };


export const useAgentsFilters = () => {
  return useQueryStates({
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    page: parseAsInteger.withDefault(DEFAULT_PAGE).withOptions({ clearOnDefault: true })
  })
}