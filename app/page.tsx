import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex mt-20 justify-center h-screen">
        <h1 className="font-dm text-5xl">
          Comfortably <br />
          <Link href="/editor">
            {" "}
            <span className="underline underline-offset-1">edit</span> and{" "}
            <span className="underline underline-offset-1">preview</span>
          </Link>
          <br />
          markdown content
          <br />&{" "}
          <Link href="/editor">
            <span className="underline underline-offset-1">create</span> nice
            README
          </Link>
          <br />
          files for your projects.
        </h1>
      </div>
    </>
  );
}
