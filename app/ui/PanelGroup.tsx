import React from "react";
import { ReactNode, useEffect, useState } from "react";
import { PropsWithChildren } from "react";
import useWindowWidth from "../lib/useWindowWidth";

type Props = {
  panels: { id: string; header: string; content: ReactNode }[];
  // eslint-disable-next-line no-unused-vars
  renderPanels: (id: string, content: ReactNode) => React.JSX.Element;
};

export default function PanelGroup(props: PropsWithChildren<Props>) {
  const [currentPanel, setCurrentPanel] = useState("Edit");
  const { width } = useWindowWidth();

  const handleClick = (e: React.UIEvent<HTMLButtonElement>) => {
    setCurrentPanel(e.currentTarget.innerHTML);
  };

  useEffect(() => {
    const editButton = document.getElementsByTagName("button")[0];
    editButton.setAttribute("aria-pressed", "true");
  }, []);

  return (
    <div className="mt-2">
      {width && width > 800 ? (
        <div className="flex border-t">
          {props.panels.map((child) => (
            <div key={`${child.id}-panel`} className="w-full border-l">
              <h2 className="m-2 text-slate-400 text-xl bg-white inline-flex border border-slate-300 rounded-md px-2 py-0.5 ">
                {child?.header}
              </h2>

              <div className="flex " data-testid={`${child.id}-panel`}>
                {child?.content}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div
            role="toolbar"
            aria-label="Edit or preview"
            className="flex border-t"
          >
            {props.panels.map((child) => (
              <div key={`${child.id}-panel`}>
                <button
                  onClick={(e) => handleClick(e)}
                  className="m-2 text-slate-400 text-xl bg-slate-100 inline-flex border border-slate-300 rounded-md px-2 py-0.5 aria-pressed:bg-white aria-pressed:text-slate-600 aria-pressed:border-slate-600"
                  key={`${child.id}-button`}
                  aria-pressed={currentPanel === child.header}
                >
                  {child?.header}
                </button>
              </div>
            ))}
          </div>
          <div className="border-t">
            {props.panels.map((child) => {
              if (currentPanel === child.header) {
                return props.renderPanels(
                  `${currentPanel}-panel`,
                  child?.content
                );
              }
            })}
          </div>
        </>
      )}
    </div>
  );
}
