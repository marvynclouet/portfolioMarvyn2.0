import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marvynclouet.fr";

export const metadata: Metadata = {
  title: "Marvyn Clouet | AI SaaS Developer",
  description:
    "Portfolio de Marvyn Clouet, AI SaaS Developer. Développement web, mobile (Swift, React, Flutter) et solutions IA.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Marvyn Clouet | AI SaaS Developer",
    description: "Portfolio — Développement web, mobile et IA. Swift, React, Flutter, Node.js.",
    url: siteUrl,
    siteName: "Marvyn Clouet",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Marvyn Clouet - AI SaaS Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvyn Clouet | AI SaaS Developer",
    description: "Portfolio — Développement web, mobile et IA.",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var dark=t==='dark'||(!t&&d);document.documentElement.classList.toggle('dark',dark);document.documentElement.setAttribute('data-theme',dark?'dark':'light');})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased text-[#1d1d1f] bg-white dark:text-white dark:bg-black relative transition-colors duration-300">
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
