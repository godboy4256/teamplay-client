import { ReactNode } from "react";
import Header from "./header/header.container";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  );
}
