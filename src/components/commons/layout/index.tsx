import { useRouter } from "next/router";
import { ReactNode } from "react";
import Footer from "./footer/footer";
import Header from "./header/header.container";
import * as S from "./header/header.styles";
import * as F from "./footer/footer.styles";

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
      {router.asPath.includes("/project/list/") ? (
        <div>{props.children}</div>
      ) : (
        <>
          <S.HeaderBox isHiddenHeader={isHiddenHeader} asPath={router.asPath}>
            <Header />
          </S.HeaderBox>
          <div>{props.children}</div>
          <F.FooterBox>
            <Footer />
          </F.FooterBox>
        </>
      )}
    </>
  );
}
