import { ReactNode, useEffect, useState } from "react";
import { PropsWithChildren } from "react";
import useWindowWidth from "../lib/useWindowWidth";

type Props = {
  panels: { id: string; header: string; content: ReactNode }[];
  renderPanels: (id: string, content: ReactNode) => React.JSX.Element;
};

export default function PanelGroup(props: PropsWithChildren<Props>) {
  const [currentPanel, setCurrentPanel] = useState("Edit");
  const { width } = useWindowWidth();

  const handleClick = (e: React.UIEvent<HTMLButtonElement>) => {
    const buttons = Array.from(document.getElementsByTagName("button"));
    setCurrentPanel(e.currentTarget.innerHTML);
  };

  useEffect(() => {
    const editButton = document.getElementsByTagName("button")[0];
    editButton.setAttribute("aria-pressed", "true");
  }, []);

  return (
    <div>
      {width && width > 800 ? (
        <div className="flex">
          {props.panels.map((child) => (
            <div key={`${child.id}-panel`} className="w-full">
              <h2 className="p-2 text-slate-600 text-xl border-l border-t border-r  bg-white rounded-sm inline-flex">
                {child?.header}
              </h2>
              <div className="border flex" data-testid={`${child.id}-panel`}>
                {child?.content}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div role="toolbar" aria-label="Edit or preview" className="flex">
            {props.panels.map((child) => (
              <div key={`${child.id}-panel`}>
                <button
                  onClick={(e) => handleClick(e)}
                  className="border-r border-t border-l bg-slate-200 text-slate-500 rounded-sm p-2 aria-pressed:bg-white aria-pressed:text-slate-900"
                  key={`${child.id}-button`}
                  aria-pressed={currentPanel === child.header}
                >
                  {child?.header}
                </button>
              </div>
            ))}
          </div>
          <div className="border">
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
