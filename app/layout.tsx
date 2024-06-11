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
          <h1>Markdown Editor</h1>
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
        <footer className="fixed bottom-0 bg-slate-100 p-3 w-full flex flex-col items-center justify-center">
          <p>Markdown Editor created with <span role='img' aria-label='love'>🖤</span> by <a href="https://github.com/vivitt" target="blank">Vivitt</a></p>
          <p>©2024</p>
        </footer>
      </body>
    </html>
  );
}
