import styled from "@emotion/styled";
import { IPropsOnBoardingUIWrapper } from "./onboarding.types";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  position: fixed;
  left: ${(props: IPropsOnBoardingUIWrapper) => `${props.left}vw`};
  z-index: 1;
  transition: all 0.35s;
`;

export const First = styled.div`
  width: 100vw;
`;

export const Second = styled.div`
  width: 100vw;
`;

export const Third = styled.div`
  width: 100vw;
`;

export const Fourth = styled.div`
  width: 100vw;
`;

export const Fifth = styled.div`
  width: 100vw;
`;
export const Sixth = styled.div`
  width: 100vw;
`;
