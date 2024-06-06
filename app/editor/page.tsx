"use client";
import { useState } from "react";
import PreviewArea from "../components/previewArea";
import EditArea from "../components/editArea";
import Panel from "../components/Panel";

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
