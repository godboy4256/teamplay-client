import { useRouter } from "next/router";
import { MouseEvent } from "react";
import HeaderUI from "./header.presenter";

export default function Header() {
  const router = useRouter()

  const onClickRouting = (e: MouseEvent<HTMLLIElement>) => {
    const navList = document.querySelectorAll('.nav__list')
    for (let i = 0; i < navList.length; i++) {
      navList[i].classList.remove("active__page")
    }
    router.push(e.currentTarget.id)
    e.currentTarget && e.currentTarget.classList.add("active__page");
  }

  return <HeaderUI
    onClickRouting={onClickRouting}
  />
}
