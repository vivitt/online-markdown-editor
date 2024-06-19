"use client";
import { useEffect, useState } from "react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function EditArea({ onChange }: Props) {
  const [value, setValue] = useState(
    window.localStorage.getItem("markdown-content") || ""
  );
  const [textAreaWidth, setTextAreaWidth] = useState(300);

  return (
    <div className="flex font-chivo">
      <div
        id="line-numbers"
        aria-hidden="true"
        className="w-5 flex flex-col items-center px-5"
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
