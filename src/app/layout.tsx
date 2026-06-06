import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dark Landing Page Task Flow",
  description: "Dark Landing Page Task Flow",
  keywords: ["Dark", "Landing", "Page", "Task", "Flow"],
  icons: {
    icon: "/src/app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
