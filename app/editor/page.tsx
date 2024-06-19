"use client";
import { ReactNode, useState } from "react";
import Panel from "../ui/Panel";
import PanelGroup from "../ui/PanelGroup";
import EditArea from "../ui/EditArea";
import PreviewArea from "../ui/previewArea";

export default function Editor() {
  const [markdown, setMarkdown] = useState(
    window.localStorage.getItem("markdown-content") || ""
  );

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
    window.localStorage.setItem("markdown-content", e.target.value);
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
        renderPanels={(id: string, content: ReactNode) => {
          return <Panel key={id}>{content}</Panel>;
        }}
      ></PanelGroup>
    </>
  );
}
