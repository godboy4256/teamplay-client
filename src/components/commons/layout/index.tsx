import { useRouter } from "next/router";
import { ReactNode } from "react";
import Header from "./header/header.container";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter()
  return (
    <>
      {
        !router.asPath.includes("/project/list/") && <Header />
      }
      <div>{props.children}</div>
    </>
  );
}
