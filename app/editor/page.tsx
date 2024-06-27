"use client";
import { ReactNode, useEffect, useState } from "react";
import Panel from "../ui/Panel";
import PanelGroup from "../ui/PanelGroup";
import EditArea from "../ui/EditArea";
import PreviewArea from "../ui/previewArea";

export default function Editor() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("markdown-content");
    if (saved) {
      setMarkdown(saved);
    }
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
    window.localStorage.setItem("markdown-content", e.target.value);
  };

  return (
    <>
      <div className="flex justify-end">
        <button className="border border-black m-2 rounded-md px-2 py-0.5 hover:shadow-solid hover:animate-box">
          Save
        </button>
        <button className="border border-black m-2 rounded-md px-2 py-0.5 hover:shadow-solid hover:animate-box">
          New
        </button>
        <button className="border border-black m-2 rounded-md px-2 py-0.5 hover:shadow-solid hover:animate-box">
          Create a README file
        </button>
      </div>
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
        renderPanels={(id: string, content: ReactNode) => {
          return <Panel key={id}>{content}</Panel>;
        }}
      ></PanelGroup>
    </>
  );
}
