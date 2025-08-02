"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 6c4e7886620c039c0a0d79987b939e6aef92bf4a
