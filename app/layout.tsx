import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beautiful Readme",
  description: "Create nice readme files for your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav className="bg-slate-50 border-b h-10 ">
          <ul className="flex items-center">
            <li className="p-2">
              <Link href="./">Home</Link>
            </li>
            <li>
              <Link href="./editor">Editor</Link>
            </li>
          </ul>
        </nav>
        <main>
        {children}
        </main>
        <footer className="fixed bottom-0">
          Vivitt 2024
        </footer>
      </body>
    </html>
  );
}
