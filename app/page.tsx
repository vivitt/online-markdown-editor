import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Beautiful Readme</h1>
      <div>
        <Link href="/editor">Start creating</Link>
      </div>
    </main>
  );
}
