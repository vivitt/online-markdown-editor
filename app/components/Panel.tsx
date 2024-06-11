import { PropsWithChildren } from "react";
type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  title: string;
};

export default function Panel(props: PropsWithChildren<Props>) {
  return (
    <div className="w-full min-h-screen border rounded-md py-3 shadow-md has-[:focus]:outline md:static absolute">
   
    <div className="bg-white ">{props.children}</div>

    </div>
  );
}
