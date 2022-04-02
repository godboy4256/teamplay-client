import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function useMoveToPage() {
  const router = useRouter();

  const moveToLogin = () => {
    router.push("/login");
  };

  const moveToSignup = () => {
    router.push("/signup");
  };

  const moveToMain = () => {
    router.push("/main");
  };

  const moveToProfileEdit = () => {
    router.push(`/profile/edit`);
  };

  const moveToProfile = () => {
    router.push("/profile");
  };

  const moveToMyProject = () => {
    router.push("/profile/list");
  };

  const moveToChatting = () => {
    router.push("/chatting");
  };

  const moveToOnboarding = () => {
    router.push("/onboarding");
  };

  const moveToBack = () => {
    history.back();
  };

  const onClickHeaderRouting = (e: MouseEvent<HTMLLIElement>) => {
    const navList = document.querySelectorAll(".nav__list");
    for (let i = 0; i < navList.length; i++) {
      navList[i].classList.remove("active__page");
    }
    router.push(e.currentTarget.id);
    e.currentTarget && e.currentTarget.classList.add("active__page");
  };
  return {
    moveToChatting,
    moveToMyProject,
    moveToLogin,
    moveToSignup,
    moveToMain,
    moveToProfileEdit,
    moveToProfile,
    onClickHeaderRouting,
    moveToBack,
    moveToOnboarding,
  };
}
