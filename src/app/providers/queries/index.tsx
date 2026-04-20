import type { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ENV } from "@/shared/config";

const queryClient = new QueryClient();

function QueriesProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={ENV.IS_DEV_RUNTIME} />
    </QueryClientProvider>
  );
}

export { QueriesProvider }
