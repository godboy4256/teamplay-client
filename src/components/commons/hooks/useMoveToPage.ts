import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function useMoveToPage() {
  const router = useRouter();

  const moveToHome = () => {
    router.push("/home");
  };

  const moveToProfileEdit = () => {
    router.push(`/profile/edit`);
  };

  const moveToProfile = () => {
    router.push("/profile");
  };

  const onClickHeaderRouting = (e: MouseEvent<HTMLLIElement>) => {
    const navList = document.querySelectorAll(".nav__list");
    for (let i = 0; i < navList.length; i++) {
      navList[i].classList.remove("active__page");
    }
    router.push(e.currentTarget.id);
    e.currentTarget && e.currentTarget.classList.add("active__page");
  };

  return { moveToHome, moveToProfileEdit, moveToProfile, onClickHeaderRouting };
}
