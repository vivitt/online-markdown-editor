import { PropsWithChildren } from "react";
type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export default function Panel(props: PropsWithChildren<Props>) {
  return <div className="bg-white ">{props.children}</div>;
}
