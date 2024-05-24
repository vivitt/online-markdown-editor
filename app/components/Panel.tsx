import { useState, useEffect } from "react";

export default function Panel({ children }) {
  return (
    <div
      className=" bg-white w-full min-h-screen border-2 rounded-md m-3 py-3 shadow-md has-[:focus]:outline "
      id="droptarget"
    >
      <div>{children}</div>
    </div>
  );
}
