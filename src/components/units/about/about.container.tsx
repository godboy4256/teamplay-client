import AboutUI from "./about.presenter";
import { FETCH_PROJECT_ALL, FETCH_USERS } from "./about.query";
import { FETCH_PROJECT_COUNTS } from "../project/list/projectList.query";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function About() {
  const router = useRouter();
  const { data: usersdata } = useQuery(FETCH_USERS, {
    variables: {
      page: 1,
    },
  });
  const { data: projectConut } = useQuery(FETCH_PROJECT_COUNTS);
  const { data: projectAll } = useQuery(FETCH_PROJECT_ALL);

  const startProjcet = projectAll?.fetchProjectAll?.filter((el: any) => {
    return el.isStart;
  }).length;

  const completeProjcet = projectAll?.fetchProjectAll?.filter((el: any) => {
    return el.isComplete;
  }).length;

  let n = 0;
  const { moveToMain } = useMoveToPage();
  useEffect(() => {
    const scrollMotion01 = document.getElementById("scroll__motion01");
    const scrollMotion02 = document.getElementById("scroll__motion02");
    const scrollMotion03 = document.getElementById("scroll__motion03");
    const scrollMotion04 = document.getElementById("scroll__motion04");
    const scrollMotion05 = document.getElementById("scroll__motion05");
    const scrollMotion06 = document.getElementById("scroll__motion06");
    const scrollMotion07 = document.getElementById("scroll__motion07");
    const scrollMotion08 = document.getElementById("scroll__motion08");
    const titleMotion01 = document.getElementById("title__motion01");
    const titleMotion02 = document.getElementById("title__motion02");
    const titleMotion03 = document.getElementById("title__motion03");
    const contentText01 = document.getElementById("content__text01");
    const contentText02 = document.getElementById("content__text02");
    const contentText03 = document.getElementById("content__text03");
    const countMotion = document.getElementById("about04");
    const aboutBackground = document.getElementById("about_background");

    const countMotionTarget: any = document?.getElementsByClassName("counting");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document
          .getElementById("scrolldown__container")
          ?.classList.add("scroll__none");
        document
          .getElementById("content_box_ani01")
          ?.classList.add("motion_add_left");
        document
          .getElementById("content_box_ani02")
          ?.classList.add("motion_add_right");
      }
      if (window.scrollY < 100) {
        document
          .getElementById("scrolldown__container")
          ?.classList.remove("scroll__none");
        document
          .getElementById("content_box_ani01")
          ?.classList.remove("motion_add_left");
        document
          .getElementById("content_box_ani02")
          ?.classList.remove("motion_add_right");
      }

      if (!countMotion || !countMotionTarget) return;
      if (
        window.scrollY >
        window.pageYOffset +
          countMotion.getBoundingClientRect().top -
          countMotion.clientHeight -
          500
      ) {
        if (n === 0) {
          for (let i = 0; i < countMotionTarget.length; i++) {
            countMotionTarget[i].click();
          }
        }
        n = 1;
        aboutBackground?.classList.add("background_change");
      } else {
        aboutBackground?.classList.remove("background_change");
      }

      if (!scrollMotion01) return;
      if (
        window.scrollY >
        window.pageYOffset +
          scrollMotion01.getBoundingClientRect().top -
          scrollMotion01.clientHeight -
          500
      ) {
        document
          .getElementById("scroll__motion01")
          ?.classList.add("motion__add");
      }

      if (!contentText01) return;
      if (
        window.scrollY >
        window.pageYOffset +
          contentText01.getBoundingClientRect().top -
          contentText01.clientHeight -
          500
      ) {
        document
          .getElementById("content__text01")
          ?.classList.add("motion__add");
      }

      if (!contentText02) return;
      if (
        window.scrollY >
        window.pageYOffset +
          contentText02.getBoundingClientRect().top -
          contentText02.clientHeight -
          500
      ) {
        document
          .getElementById("content__text02")
          ?.classList.add("motion__add");
      }

      if (!contentText03) return;
      if (
        window.scrollY >
        window.pageYOffset +
          contentText03.getBoundingClientRect().top -
          contentText03.clientHeight -
          500
      ) {
        document
          .getElementById("content__text03")
          ?.classList.add("motion__add");
      }

      if (!titleMotion01) return;
      if (
        window.scrollY >
        window.pageYOffset +
          titleMotion01.getBoundingClientRect().top -
          titleMotion01.clientHeight -
          500
      ) {
        document
          .getElementById("title__motion01")
          ?.classList.add("motion__add");
      }

      if (!titleMotion02) return;
      if (
        window.scrollY >
        window.pageYOffset +
          titleMotion02.getBoundingClientRect().top -
          titleMotion02.clientHeight -
          500
      ) {
        document
          .getElementById("title__motion02")
          ?.classList.add("motion__add");
      }

      if (!titleMotion03) return;
      if (
        window.scrollY >
        window.pageYOffset +
          titleMotion03.getBoundingClientRect().top -
          titleMotion03.clientHeight -
          500
      ) {
        document
          .getElementById("title__motion03")
          ?.classList.add("motion__add");
      }

      if (!scrollMotion02) return;
      if (
        window.scrollY >
        window.pageYOffset +
          scrollMotion02.getBoundingClientRect().top -
          scrollMotion02.clientHeight -
          500
      ) {
        document
          .getElementById("scroll__motion02")
          ?.classList.add("motion__add");
      }

      if (!scrollMotion03) return;
      if (
        window.scrollY >
        window.pageYOffset +
          scrollMotion03.getBoundingClientRect().top -
          scrollMotion03.clientHeight -
          500
      ) {
        document
          .getElementById("scroll__motion03")
          ?.classList.add("motion__add");
      }

      if (!scrollMotion04) return;
      if (
        window.scrollY >
        window.pageYOffset +
          scrollMotion04.getBoundingClientRect().top -
          scrollMotion04.clientHeight -
          500
      ) {
        document
          .getElementById("scroll__motion04")
          ?.classList.add("motion__add");
      }

      if (!scrollMotion05) return;
      if (
        window.scrollY >
        window.pageYOffset +
          scrollMotion05.getBoundingClientRect().top -
          scrollMotion05.clientHeight -
          500
      ) {
        document
          .getElementById("scroll__motion05")
          ?.classList.add("motion__add");
      }

      if (!scrollMotion06) return;
      if (
        window.scrollY >
        window.pageYOffset +
          scrollMotion06.getBoundingClientRect().top -
          scrollMotion06.clientHeight -
          500
      ) {
        document
          .getElementById("scroll__motion06")
          ?.classList.add("motion__add");
      }

      if (!scrollMotion07) return;
      if (
        window.scrollY >
        window.pageYOffset +
          scrollMotion07.getBoundingClientRect().top -
          scrollMotion07.clientHeight -
          500
      ) {
        document
          .getElementById("scroll__motion07")
          ?.classList.add("motion__add");
      }

      if (!scrollMotion08) return;
      if (
        window.scrollY >
        window.pageYOffset +
          scrollMotion08.getBoundingClientRect().top -
          scrollMotion08.clientHeight -
          500
      ) {
        document
          .getElementById("scroll__motion08")
          ?.classList.add("motion__add");
      }
    });
  }, []);
  return (
    <AboutUI
      router={router}
      usersdata={usersdata}
      projectConut={projectConut}
      startProjcet={startProjcet}
      completeProjcet={completeProjcet}
      moveToMain={moveToMain}
    />
  );
}
