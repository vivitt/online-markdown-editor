"use client";
import React from "react";

type Props = {
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  markdown: string;
};

export default function EditArea({ onChange, markdown }: Props) {
  return (
    <div className="flex px-3 font-chivo w-full h- mr-8 relative has-[:focus]:outline-2">
      
      <div
        className="resize-none w-full z-0 absolute m-0 p-0"
      >
        {markdown && markdown.split("\n").length > 0 &&
          markdown.split("\n").map((el, index) => {
            return (
              <div className="flex" key= {index + 1}>
              <span className="mr-2 text-slate-400" >
                {index + 1}
              </span>
              <span className="invisible">
                {el}
              </span>
              </div>
            );
          })}
      </div>
      <textarea
        id="edit"
        name="edit"
        aria-autocomplete="list"
        data-language="markdown"
        className="absolute resize-none w-full focus:outline-0 z-10 m-0 p-0 ml-8 h-screen"
        onChange={(e) => {
          onChange(e);
        }}
        value={markdown}
        placeholder="Add your content here..."
      ></textarea>
  
     
    </div>
  );
}
