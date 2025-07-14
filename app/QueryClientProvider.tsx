"use client";

import {
  QueryClient,
  QueryClientProvider as ReactQeuryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQeuryClientProvider client={queryClient}>
      {children}
    </ReactQeuryClientProvider>
  );
};

export default QueryClientProvider;
