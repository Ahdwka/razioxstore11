import "./globals.css";
import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-alexandria",
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = {
  title: "Razio لابتوب",
  description: "Find the best laptops online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cn(alexandria.variable, "scroll-smooth")}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-alexandria antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
