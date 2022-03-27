import { useRouter } from "next/router";
import HeaderUI from "./header.presenter";

export default function Header() {
  const router = useRouter();
  const isHiddenNav = [
    "/project/new",
    "/login",
    "/onboarding",
    "/chatting/detail",
    "/chatting/list",
    "/signup",
    "/signup/edit",
  ];

  return <HeaderUI isHiddenNav={isHiddenNav.includes(router.asPath)} />;
}
