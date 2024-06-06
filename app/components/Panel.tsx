import { PropsWithChildren } from "react";
type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export default function Panel(props: PropsWithChildren<Props>) {
  return (
    <div
      className=" bg-white w-full min-h-screen border-2 rounded-md m-3 py-3 shadow-md has-[:focus]:outline "
      id="droptarget"
    >
      <div>{props.children}</div>
    </div>
  );
}
