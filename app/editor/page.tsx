"use client";
import { useState } from "react";
import Panel from "../components/Panel";
import PanelGroup from "../components/PanelGroup";
import EditArea from "../components/EditArea";
import PreviewArea from "../components/previewArea";

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
        renderPanels={(content) => {
          return <Panel>{content}</Panel>;
        }}
      ></PanelGroup>
    </>
  );
}
