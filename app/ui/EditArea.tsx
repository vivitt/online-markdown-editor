"use client";
import { useEffect, useState } from "react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function EditArea({ onChange }: Props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("markdown-content");
    if (saved) {
      setValue(saved);
    }
  }, []);

  return (
    <div className="flex px-3 font-chivo w-full">
      <div
        id="line-numbers"
        aria-hidden="true"
        className="w-5 grid pr-3 text-slate-400"
      >
        {value.split("\n").length > 0 &&
          value.split("\n").map((el, index) => {
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
          setValue(e.target.value);
        }}
        value={value}
        placeholder="Add your content here..."
      ></textarea>
    </div>
  );
}
