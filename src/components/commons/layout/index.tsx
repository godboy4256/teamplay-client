import { useRouter } from "next/router";
import { ReactNode } from "react";
import Header from "./header/header.container";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = [
    "/project/new",
    "/login",
    "/onboarding",
    "/chatting/detail",
    "/chatting/list",
    "/signup",
    "/signup/edit",
  ];

  return (
    <>
      {isHiddenHeader.includes(router.asPath) ? (
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
