import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Markdown Editor",
  description:
    "Comfortably edit and preview markdown content & create nice README files for your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        <nav>
          <ul className="flex items-center justify-between">
            <li className="p-2">
              <Link href="./">
                {" "}
                <h1 className="font-dm text-4xl p-2">Markdown Editor</h1>
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer className="bg-slate-100 p-3 w-full flex flex-col items-center justify-center">
          <p>
            Markdown Editor created with{" "}
            <span role="img" aria-label="love">
              🖤
            </span>{" "}
            by{" "}
            <a href="https://github.com/vivitt" target="blank">
              Vivitt
            </a>
          </p>
          <p>©2024</p>
        </footer>
      </body>
    </html>
  );
}
