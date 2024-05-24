"use client";

import { useState } from "react";
import EditArea from "../components/EditArea";
import Panel from "../components/Panel";
import PreviewArea from "../components/PreviewArea";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export default function Editor() {
  const [markdown, setMarkdown] = useState("");

  const [lines, setLines] = useState([]);
  const onChange = (e: ChangeEvent) => {
    setMarkdown(e.target.value);
    setLines(e.target.value.split("\n"));
  };
  return (
    <main>
      <div className="flex flex-col w-100 sm:flex-row">
        <Panel title="Edit">
          <EditArea onChange={onChange} lines={lines}></EditArea>
        </Panel>

        <Panel title="Preview">
          <PreviewArea markdown={markdown}></PreviewArea>
        </Panel>
      </div>
    </main>
  );
}
