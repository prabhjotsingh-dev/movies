import "./globals.css";
import { ThemeProvider } from "@/comman/theme/theme-provider";
export const metadata = {
  title: "SEARCH MOVIES",
  description: "SEARCH ANY MOVIE",
};

import { Suspense } from "react";
import { NavbarWrapper } from "@/components/navbar/NavbarWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <NavbarWrapper />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
