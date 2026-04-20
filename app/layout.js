import "./globals.css";
import { ThemeProvider } from "@/comman/theme/theme-provider";
export const metadata = {
  title: "SEARCH MOVIES",
  description: "SEARCH ANY MOVIE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="" > 
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>  
    </html>
  );
}
