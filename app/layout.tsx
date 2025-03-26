import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

// ✅ Optimized font loading for better performance
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

// ✅ Improved metadata for better SEO & social media previews
export const metadata: Metadata = {
  title: "PillionPal - Cut Cost, Not Convenience",
  description: "Affordable & reliable bike rides at your fingertips.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "PillionPal - Affordable Bike Rides",
    description: "Book affordable and reliable bike rides with PillionPal.",
    url: "https://pillionpal.com",
    siteName: "PillionPal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PillionPal Banner",
      },
    ],
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {/* ThemeProvider for Dark/Light Mode Support */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* ✅ Optimized Analytics loading */}
        <Analytics />
      </body>
    </html>
  );
}
