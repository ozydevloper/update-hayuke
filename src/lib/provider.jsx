"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Provider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
