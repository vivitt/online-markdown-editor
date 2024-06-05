"use client";

import { useState } from "react";
import EditArea from "../components/EditArea";
import Panel from "../components/Panel";
import PreviewArea from "../components/PreviewArea";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

function ResizeHandler() {
  const resize = () => {};
  return (
    <div
      className=" bg-white min-h-screen border-2 rounded-md m-3 py-3 cursor-col-resize"
      onDragStart={resize}
    ></div>
  );
}

export default function Editor() {
  const [markdown, setMarkdown] = useState("");
  const onChange = (e: ChangeEvent) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <h1>Markdown Editor</h1>

      <div className="flex flex-col w-100 sm:flex-row">
        <Panel title="Edit">
          <EditArea onChange={onChange}></EditArea>
        </Panel>
        <ResizeHandler></ResizeHandler>
        <Panel title="Preview">
          <PreviewArea markdown={markdown}></PreviewArea>
        </Panel>
      </div>
    </>
  );
}
