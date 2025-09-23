// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

// Optimized Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

// Fully SEO-optimized metadata using logo.png as OG/Twitter image
export const metadata: Metadata = {
  metadataBase: new URL("https://pillionpal.vercel.app"),
  title: "PillionPal - Cut Cost, Not Convenience",
  description: "Affordable & reliable bike rides at your fingertips. Split bike ride costs fairly with PillionPal official Website.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "PillionPal - Cut Cost, Not Convenience",
    description: "Book affordable and reliable bike rides with PillionPal.",
    url: "https://pillionpal.vercel.app",
    siteName: "PillionPal",
    images: [
      {
        url: "https://pillionpal.vercel.app/logo.png", // Using logo.png
        width: 1200,
        height: 630,
        alt: "PillionPal Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PillionPal - Cut Cost, Not Convenience",
    description: "Affordable & reliable bike rides at your fingertips.",
    images: ["https://pillionpal.vercel.app/logo.png"], // Using logo.png
    site: "@pillionpal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="WfIZz18GHMJ7YCVbbNtXrM0QOcOR5bz7B1VX54U3-68" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://pillionpal.vercel.app/" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PillionPal",
              "url": "https://pillionpal.vercel.app",
              "logo": "https://pillionpal.vercel.app/logo.png",
              "sameAs": ["https://www.linkedin.com/company/pillionpal"]
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
