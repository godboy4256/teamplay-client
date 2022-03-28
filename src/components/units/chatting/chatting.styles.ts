import styled from "@emotion/styled";
import { IPropsChattingUIWrapper } from "./chatting.types";
import { breakPoints } from "../../../commons/styles/breakpoint";

export const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 217.61px);
  overflow: hidden;
  position: fixed;
  left: ${(props: IPropsChattingUIWrapper) => `${props.left}vw`};
  z-index: 1;
  transition: all 0.35s;

  @media ${breakPoints.tablet} {
    overflow: auto;
    position: static;
  }

  @media ${breakPoints.web} {
    overflow: auto;
    position: static;
    justify-content: center;
  }
`;

export const ListBox = styled.div`
  width: 100vw;

  @media ${breakPoints.tablet} {
    width: 375px;
  }

  @media ${breakPoints.web} {
    width: 375px;
  }
`;

export const DetailBox = styled.div`
  width: 100vw;

  @media ${breakPoints.tablet} {
    width: calc(100vw - 375px);
  }

  @media ${breakPoints.web} {
    width: 825px;
  }
`;
