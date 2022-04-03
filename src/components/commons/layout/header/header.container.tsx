import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { IMutation } from "../../../../commons/types/generated/types";
import useMoveToPage from "../../hooks/useMoveToPage";
import HeaderUI from "./header.presenter";
import { LOGOUT } from "./header.queries";
import { IHeaderContext } from "./header.types";

export const HeaderContext = createContext<IHeaderContext>({});

export default function Header() {
  const {
    moveToLogin,
    moveToSignup,
    moveToProfile,
    moveToMyProject,
    moveToChatting,
    moveToPayment,
  } = useMoveToPage();
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);
  const router = useRouter();
  const [position, setPosition] = useState(-80);
  const [isPoint, setIsPoint] = useState(false);
  const [isView, setIsView] = useState(false);
  const isHiddenNav = [
    "/project/new",
    "/login",
    "/onboarding",
    "/chatting/detail",
    "/chatting/list",
  ];

  const onClickMovetoPage = (name: string) => () => {
    document.querySelector("#__next")?.classList.remove("projectdetalon");

    if (name === "login") moveToLogin();

    if (name === "signup") moveToSignup();

    if (name === "chatting") moveToChatting();

    if (name === "profile") moveToProfile();

    if (name === "myProject") moveToMyProject();

    if(name === "payment") moveToPayment();
    
    setPosition(-80);
  };

  const onClickLogout = () => {
    logout();
    location.reload();
  };

  const onCliclsetPosition = () => {
    if (position === -80) setPosition(0);
    if (position === 0) setPosition(-80);
    setIsView((prev) => !prev);
  };

  const onClickPointModal = () => {
    setIsPoint((prev) => !prev);
  };

  const value = {
    position,
    isView,
    isPoint,
    onCliclsetPosition,
    onClickLogout,
    onClickMovetoPage,
    onClickPointModal,
  };

  return (
    <HeaderContext.Provider value={value}>
      <HeaderUI isHiddenNav={isHiddenNav.includes(router.asPath)} />
    </HeaderContext.Provider>
  );
}
