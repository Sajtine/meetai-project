// modules/agents/server-params.ts
import { DEFAULT_PAGE } from "@/constant";

// Server-safe parsing
export const loadSearchParamsServer = (searchParams: Record<string, string | undefined>) => {
  return {
    search: typeof searchParams.search === "string" ? searchParams.search : "",
    page: parseInt(searchParams.page || "", 10) || DEFAULT_PAGE,
  };
};
