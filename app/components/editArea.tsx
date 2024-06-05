"use client";
import { useState } from "react";

export default function EditArea({ onChange }) {
  const [value, setValue] = useState("");

  const [lines, setLines] = useState(0);

  const lineNumbers = new Array(lines).map((index) => {
    return (
      <li className="" key={index + 1}>
        {index + 1}
      </li>
    );
  });

  return (
    <div
      className="flex  font-mono"
      // role="textbox"
      // lang="markdown"
      // aria-multiline="true"
      // aria-live="polite"
    >
      <div
        id="line-numbers"
        aria-hidden="true"
        className="w-5 flex flex-col items-center px-5 "
      >
     
          {value !== '' &&
            value.split("\n").map((el, index) => {
              return (
                <span className="" key={index + 1}>
                  {index + 1}
                </span>
              );
            })}
      </div>
      <textarea
        aria-autocomplete="list"
        data-language="markdown"
        className="resize-none  h-screen focus:outline-0"
        onChange={(e) => {
          onChange(e);
          setValue(e.target.value);
        }}
      ></textarea>
    </div>
  );
}
