"use client";
import React from "react";

type Props = {
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  markdown: string;
};

export default function EditArea({ onChange, markdown }: Props) {
  return (
    <div className="flex px-3 font-chivo w-full">
      <div
        id="line-numbers"
        aria-hidden="true"
        className="w-5 grid pr-3 text-slate-400"
      >
        {markdown.split("\n").length > 0 &&
          markdown.split("\n").map((el, index) => {
            return (
              <span className="h-6" key={index + 1}>
                {index + 1}
              </span>
            );
          })}
      </div>

      <textarea
        id="edit"
        name="edit"
        aria-autocomplete="list"
        data-language="markdown"
        className="resize-none w-full h-screen focus:outline-0"
        onChange={(e) => {
          onChange(e);
        }}
        markdown={markdown}
        placeholder="Add your content here..."
      ></textarea>
    </div>
  );
}
