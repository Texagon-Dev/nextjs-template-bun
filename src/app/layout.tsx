import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Texagon Nextjs-Bun-Template",
  description: "Nextjs Bun Template",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value ?? "en";
  return (
    <html
      lang={lang}
      className="light"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
export const runtime = "edge";
