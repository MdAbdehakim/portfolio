import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdelhakim Mahdad | Big Data & Cloud Computing",
  description: "Portfolio of Abdelhakim Mahdad - Master's Student in Big Data & Cloud Computing, specializing in Machine Learning, Python, and distributed systems. Available for PFE internship.",
  keywords: ["Big Data", "Cloud Computing", "Machine Learning", "Python", "Data Science", "PFE", "Internship", "Morocco"],
  authors: [{ name: "Abdelhakim Mahdad" }],
  openGraph: {
    title: "Abdelhakim Mahdad | Big Data & Cloud Computing",
    description: "Bridging the gap between raw data and intelligent decision-making.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className}>
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


