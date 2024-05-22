"use client";
import Markdown from "react-markdown";
import { useState } from "react";
import EditArea from "../components/editArea";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export default function Editor() {
  const [markdown, setMarkdown] = useState("");

  const onChange = (e: ChangeEvent) => {
    setMarkdown(e.target.value);
  };
  return (
    <main>
      <h1 className="text-5xl">Markdown Editor</h1>
      <div className="flex w-100">
        <EditArea onChange={onChange}></EditArea>
        <section>
          <h2>Preview</h2>
          <Markdown className="prose">{markdown}</Markdown>
        </section>
      </div>
    </main>
  );
}
