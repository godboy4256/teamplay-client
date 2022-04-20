import { breakPoints } from "../../../commons/styles/breakpoint";
import styled from "@emotion/styled";

export const AboutMeTop = styled.section`
  width: 100%;
  max-width: 1400px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  @media ${breakPoints.mobile} {
    text-align: center;
  }
  @media ${breakPoints.mobile} {
    text-align: center;
  }
  & .done__girl {
    max-width: 600px;
    position: absolute;
    top: 50%;
    right: 10vw;
    transform: translateY(-50%);
    @media ${breakPoints.mobile} {
      width: 80%;
    }
    @media ${breakPoints.tablet} {
      width: 80%;
    }
  }
  line-height: 1.4;
  z-index: 1;
`;

export const AboutWrapper = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding: 0 20px;
  & .about__button {
    background-color: rgba(56, 148, 255, 1);
    border-radius: 12px;
    padding: 8px 20px;
    display: inline-block;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
  }
  & #content_box_ani01 {
    width: 100%;
    max-width: 600px;
    transition: 0.4s;
    opacity: 1;
    transform: translateX(0);
    margin-left: 100px;
    &.motion_add_left {
      opacity: 0;
      transform: translateX(100%);
    }
    @media ${breakPoints.mobile} {
      display: none;
    }
    @media ${breakPoints.tablet} {
      display: none;
    }
  }
  & #content_box_ani02 {
    transition: 0.4s;
    opacity: 1;
    transform: translateX(0);
    &.motion_add_right {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`;

export const AboutBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, #f3f9ff 0%, rgba(56, 148, 255, 1) 100%);
  opacity: 1;
  z-index: 0;
  transition: 0.4s;
  &.background_change {
    opacity: 0;
  }
`;

export const ContentBox = styled.div`
  height: 50%;
  width: 50%;
  padding: 50px;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 0;
  }
  & .about__logo {
    width: 100%;
    & > img {
      width: 100%;
    }
  }
  & .main__desc {
    font-size: 16px;
    @media ${breakPoints.mobile} {
      font-size: 14px;
    }
    @media ${breakPoints.mobile} {
      font-size: 14px;
    }
    padding: 30px 0;
  }
`;

export const AboutMeSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 200px auto;
  position: relative;
  z-index: 2;
  & .counting {
    display: block;
    font-size: 90px;
    padding-top: 20px;
    @media ${breakPoints.mobile} {
      font-size: 80px;
    }
    @media ${breakPoints.tablet} {
      font-size: 80px;
    }
  }
  & .img_box {
    width: 100%;
    height: 400px;
    @media ${breakPoints.mobile} {
      height: 300px;
    }
    & img {
      width: 100%;
    }
  }
  &#about04 {
    width: 100%;
    display: flex;
    @media ${breakPoints.mobile} {
      flex-wrap: wrap;
    }
    @media ${breakPoints.tablet} {
      flex-wrap: wrap;
    }
    & > div {
      width: 25%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media ${breakPoints.mobile} {
        width: 50%;
        margin-bottom: 50px;
      }
    }
  }
  & .about-content-title {
    font-size: 30px;
    text-align: center;
    padding: 100px 0 70px;
    transform: translateY(50px);
    opacity: 0;
    transition: 0.4s;
    &.motion__add {
      transform: translateY(0);
      opacity: 1;
    }
  }
  & .contents_img {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 100px;
    transition: 1s;
    opacity: 0;
    transform: translateY(50px);
    &.motion__add {
      transform: translateY(0);
      opacity: 1;
    }
    &.right_layout {
      justify-content: flex-end;
    }
    & img {
      width: 100%;
      max-width: 700px;
      border-radius: 20px;
    }
  }
  & .content_content {
    line-height: 1.4;
    opacity: 0;
    transition: 0.4s;
    &.motion__add {
      opacity: 1;
    }
    text-align: center;
    & > div {
      margin-bottom: 50px;
    }
  }
`;

export const ScrollDown = styled.div`
  &#scrolldown__container {
    @media ${breakPoints.mobile} {
      display: none;
    }
    @media ${breakPoints.tablet} {
      display: none;
    }
    &.scroll__none {
      display: none;
    }
  }
  .scrolldown-wrapper {
    left: 50%;
    position: fixed;
    z-index: 30;
    text-align: center;
    bottom: 0;
    transform: translate(-50%, -50%);
  }

  .scrolldown {
    border: 2px solid #ffffff;
    border-radius: 30px;
    height: 46px;
    margin: 0 auto 8px;
    text-align: center;
    width: 30px;
  }
  @keyframes scrolldown {
    0% {
      opacity: 0;
      transform: translate(0, -8px);
    }
    50% {
      opacity: 1;
      transform: translate(0, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 8px);
    }
  }
  .scrolldown-p1,
  .scrolldown-p2 {
    animation-duration: 1.5s;
    animation-name: scrolldown;
    animation-iteration-count: infinite;
    fill: #ffffff;
  }

  .scrolldown-p2 {
    animation-delay: 0.75s;
  }
`;
