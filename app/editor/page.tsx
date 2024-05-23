"use client";

import { useState } from "react";
import EditArea from "../components/EditArea";
import Panel from "../components/Panel";
import Divider from "../components/ResizableHandle";
import PreviewArea from "../components/PreviewArea";

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
        <Panel title="Edit">
          <EditArea onChange={onChange}></EditArea>
        </Panel>

        <Panel title="Preview">
          <PreviewArea markdown={markdown}></PreviewArea>
        </Panel>
      </div>
    </main>
  );
}
