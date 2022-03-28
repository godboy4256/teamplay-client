import { useRouter } from "next/router";
import { ReactNode } from "react";
import Header from "./header/header.container";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = [
    "/login",
    "/onboarding",
    "/chatting",
    "/signup",
    "/signup/edit",
  ];

  return (
    <>
      {router.asPath.includes("/project/list/") ||
      isHiddenHeader.includes(router.asPath) ? (
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
