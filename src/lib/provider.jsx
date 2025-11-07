"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export function Provider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
      </QueryClientProvider>

      </SessionProvider>
    </NextThemesProvider>
  );
}
