import { breakPoints } from "./../../../commons/styles/breakpoint";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const MainBox = styled.div`
  width: 100%;
  padding-bottom: 50px;
  overflow-x: hidden;
`;

export const MainTop = styled.div``;

export const MainBottom = styled.div``;
export const ContentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 900;
  padding: 30px 0 15px;
  & > h3 {
    font-size: 20px;
    display: flex;
    align-items: center;
  }
`;

const mainIntroAni = keyframes`
  from{
    opacity: 1;
    visibility: visible;
  }
  to{
    opacity: 0;
    visibility: hidden;
  }
`;

export const MainRenderingBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #3894ff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 700;
  font-size: 100px;
  letter-spacing: -1;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${mainIntroAni} 1s ease-in-out 1s 1 forwards;
  @media ${breakPoints.mobile} {
    font-size: 50px;
  }
  @media ${breakPoints.tablet} {
    font-size: 70px;
  }
`;
