"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Provider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
