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
      <body className={`bg-dot-pattern  bg-repeat ${inter.className}`}>
        <nav>
          <ul className="flex">
            <li>
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
        <footer>
          Vivitt 2024
        </footer>
      </body>
    </html>
  );
}
