"use client";
import { useState } from "react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function EditArea({ onChange }: Props) {
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
    <div className="flex  font-mono">
      <div
        id="line-numbers"
        aria-hidden="true"
        className="w-5 flex flex-col items-center px-5 "
      >
        {value !== "" &&
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
        className="resize-none w-full h-screen focus:outline-0"
        onChange={(e) => {
          onChange(e);
          setValue(e.target.value);
        }}
      ></textarea>
    </div>
  );
}
