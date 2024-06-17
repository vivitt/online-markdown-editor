"use client";
import { useEffect, useState } from "react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function EditArea({ onChange }: Props) {
  const [value, setValue] = useState("");

  const [lines, setLines] = useState(0);

  const [textAreaWidth, setTextAreaWidth] = useState(300)


  const lineNumbers = new Array(lines).map((index) => {
    return (
      <li className="" key={index + 1}>
        {index + 1}
      </li>
    );
  });

useEffect(() => {
  const textarea = document.getElementById('edit')
  setTextAreaWidth(textarea?.offsetWidth || 0)
  console.log(textarea?.offsetWidth)
}, [])

  return (
    <div className="flex font-chivo">
      <div
        id="line-numbers"
        aria-hidden="true"
        className="w-5 flex flex-col items-center px-5"
      >
         <span className="h-6" key={0}>
              1
          </span>
        {value.split("\n").length > 1 &&
          value.split("\n").map((el, index) => {
            const chars = el.length

            console.log(chars / textAreaWidth)
            if(index === 0) {
              return <></>
            } 
              return (
                <span className="h-6" key={index + 1}>
                  {index + 1}
                </span>
              );
            
           
          })}
      </div>
    
      <textarea
      id='edit'
      name="edit"
        aria-autocomplete="list"
        data-language="markdown"
        className="resize-none w-full h-screen focus:outline-0"
        onChange={(e) => {
          onChange(e);
          setValue(e.target.value);
          console.log(value.split("\n"))
        }}
        placeholder="Add your content here..."
      ></textarea>
    </div>
  );
}
