"use client";
import { useState } from "react";
import PreviewArea from "../components/previewArea";
import EditArea from "../components/EditArea";
import Panel from "../components/Panel";
import PanelGroup from "../components/PanelGroup";

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
            content: <div>Edit</div>,
          },
          {
            id: "preview",
            header: "Preview",
            content: <div>Preview</div>,
          },
        ]}
        renderPanels={(content) => {
          return <Panel>{content}</Panel>;
        }}
      >
        <EditArea onChange={onChange}></EditArea>
        <PreviewArea markdown={markdown}></PreviewArea>
      </PanelGroup>
    </>
  );
}
