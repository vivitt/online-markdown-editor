import { ReactNode, useEffect, useState } from "react";
import { PropsWithChildren } from "react";

type Props = {
  panels: { id: string; header: string; content: ReactNode }[];
  renderPanels: (id: string, content: ReactNode) => React.JSX.Element;
};

export default function PanelGroup(props: PropsWithChildren<Props>) {
  const [currentPanel, setCurrentPanel] = useState("Edit");

  const handleClick = (e: React.UIEvent<HTMLButtonElement>) => {
    const buttons = Array.from(document.getElementsByTagName("button"));
    buttons.forEach((btn) => {
      if (e.target === btn) {
        btn.setAttribute("aria-pressed", "true");
        setCurrentPanel(btn.innerHTML);
      } else {
        btn.setAttribute("aria-pressed", "false");
      }
    });
  };

  useEffect(() => {
    const editButton = document.getElementsByTagName("button")[0];
    editButton.setAttribute("aria-pressed", "true");
  }, []);

  return (
    <div>
      <div role="toolbar" aria-label="Edit or preview" className="flex">
        {props.panels.map((child) => (
          <div key={`${child.id}-panel`} className="md:w-full">
            <button
              onClick={(e) => handleClick(e)}
              className="border-r border-t border-l bg-slate-200 text-slate-500 rounded-sm p-2 aria-pressed:bg-white aria-pressed:text-slate-900"
              key={`${child.id}-button`}
            >
              {child?.header}
            </button>

            <div
              className="border hidden md:flex"
              data-testid={`${child.id}-panel`}
            >
              {child?.content}
            </div>
          </div>
        ))}
      </div>
      <div className="border md:hidden">
        {props.panels.map((child) => {
          if (currentPanel === child.header) {
            return props.renderPanels(`${currentPanel}-panel`, child?.content);
          }
        })}
      </div>
    </div>
  );
}
