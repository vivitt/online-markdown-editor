"use client";
import React from "react";

type Props = {
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  markdown: string;
};

export default function EditArea({ onChange, markdown }: Props) {
  return (
    <div className="flex px-3 font-chivo w-full h-full">
      <div
        id="line-numbers"
        aria-hidden="true"
        className="w-5 grid pr-3 text-slate-400 text-base auto-rows-max"
      >
        {markdown.split("\n").length > 0 &&
          markdown.split("\n").map((el, index) => {
            return (
              <span className="" key={index + 1}>
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
        className="resize-none w-full focus:outline-0"
        onChange={(e) => {
          onChange(e);
        }}
        value={markdown}
        placeholder="Add your content here..."
      ></textarea>
    </div>
  );
}
