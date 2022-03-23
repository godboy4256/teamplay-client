import { useRouter } from "next/router";
import { ReactNode } from "react";
import Header from "./header/header.container";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = [
    router.asPath.includes("/login"),
    router.asPath.includes("/project/list/"),
  ];
  return (
    <>
      {isHiddenHeader ? (
        <div>{props.children}</div>
      ) : (
        <>
          <Header />
          <div>{props.children}</div>
        </>
      )}
    </>
  );
}
