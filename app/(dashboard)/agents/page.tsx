import { auth } from "@/lib/auth";
import { loadSearchParamsServer } from "@/modules/agents/server-params"; // ✅ server-safe
import { AgentsListHeader } from "@/modules/agents/ui/components/agent-list-header";
import { AgentsView, AgentsViewLoading } from "@/modules/agents/ui/views/agents-view";
import { getQueryClient, trpc } from "@/trpc/server";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface Props {
  searchParams: Record<string, string | undefined>;
}

const Page = async ({ searchParams }: Props) => {
  // ✅ Use server-safe loader
  const filters = loadSearchParamsServer(searchParams);

  // Auth
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/sign-in");

  // Prefetch TRPC query
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.agents.getMany.queryOptions({ ...filters })
  );

  return (
    <>
      <AgentsListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<AgentsViewLoading />}>
          <AgentsView /> {/* client component */}
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default Page;
