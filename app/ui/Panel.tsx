import { PropsWithChildren, ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function Panel(props: PropsWithChildren<Props>) {
  return <div className="bg-white">{props.children}</div>;
}
