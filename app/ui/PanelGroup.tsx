import { ReactNode, useState } from "react";
import { PropsWithChildren } from "react";

type Props = {
 panels: { id: string,
  header: string,
  content: ReactNode
}[], 
 renderPanels: (content:string) => React.JSX.Element
};

export default function PanelGroup(props: PropsWithChildren<Props>) {

  const [className, setClassName] = useState('');

  const handleClick =  (e: React.UIEvent<HTMLButtonElement>) => {};
  return (
    <div className="md:flex flex-wrap relative w-full">
        {props.panels.map((child) => (
          <div key={child.id} className="md:w-3/6 w-full min-w-80">
           <button onClick={(e) => handleClick(e)} className='border-r border-t border-l rounded-sm p-2' > {child?.header} </button>
           <div className="border">
            {child?.content}
            </div>
          </div>
        ))}
   
    </div>
  )
}