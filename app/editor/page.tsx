"use client";
import { useState } from "react";
import PreviewArea from "../components/previewArea";
import EditArea from "../components/editArea";
import Panel from "../components/Panel";
import PanelGroup from "../components/PanelGroup";

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

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <PanelGroup
        panels={[
          {
            id: "edit",
            header: "Edit",
            content: <EditArea onChange={onChange}></EditArea>,
          },
          {
            id: "preview",
            header: "Preview",
            content: <PreviewArea markdown={markdown}></PreviewArea>,
          },
        ]}
        renderPanel={(id, content) => {
          return <Panel>{content}</Panel>;
        }}
      ></PanelGroup>
    </>
  );
}
