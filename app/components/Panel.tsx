import { useState, useEffect } from "react";

export default function Panel({ children, title }) {
  return (
    <div className="mx-0.5  bg-slate-100 w-full h-screen " id="droptarget">
      <h2 className="text-xl bg-white inline px-5 py-1 border-solid border-2 border-indigo-600">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}
