import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import theme from "../theme";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ACM at UCSB",
  description:
    "The official website for the Association for Computing Machinery at UCSB",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <script
        data-goatcounter="https://ucsbacm.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
