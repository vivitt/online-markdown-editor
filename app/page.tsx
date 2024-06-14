import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="font-dm text-5xl">
      Comfortably <br/>
      <Link href="/editor"> <span className="underline underline-offset-1">edit</span> and <span className="underline underline-offset-1">preview</span></Link><br/>
      markdown content.
      </div>
    </div>
  );
}
