import React from "react";
import { PropsWithChildren } from "react";
type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export default function PanelGroup(props: PropsWithChildren<Props>) {
  return (
    <div className="md:flex flex-wrap relative w-100">
        {React.Children.map(props.children, (child) => (
          <div>
           <button> {child?.props.title} </button>
            {React.cloneElement(child, {className: ''})}
          </div>
        ))}
   
    </div>
  );
}
