import styled from "@emotion/styled";
import { IPropsHeaderBox } from "./header.types";
import { breakPoints } from "../../../../commons/styles/breakpoint";

export const HeaderBox = styled.div`
  display: ${(props: IPropsHeaderBox) =>
    props.isHiddenHeader.includes(props.asPath) ? "none" : "block"};

  @media ${breakPoints.tablet} {
    display: ${(props: IPropsHeaderBox) =>
      props.isHiddenHeaderWeb.includes(props.asPath) ? "none" : "block"};
  }

  @media ${breakPoints.web} {
    display: ${(props: IPropsHeaderBox) =>
      props.isHiddenHeaderWeb.includes(props.asPath) ? "none" : "block"};
  }
`;

export const HeaderStyle = styled.header`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  & > div {
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  & h1 {
    padding: 12px 0;
    @media (min-width: 1200px) {
      padding: 20px 0;
      margin-right: 50px;
    }

    @media ${breakPoints.tablet} {
      padding: 20px 0;
      margin-right: 50px;
    }
    & img {
      @media ${breakPoints.tablet} {
        width: 12.643rem;
      }
      @media (min-width: 1200px) {
        width: 12.643rem;
      }
    }
  }
  @media ${breakPoints.tablet} {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const HeaderNav = styled.nav`
  & ul {
    display: flex;
  }
  & ul > li {
    margin-right: 25px;
    cursor: pointer;
    position: relative;

    padding: 12px 0;

    @media ${breakPoints.tablet} {
      font-size: 15px;
      padding: 23px 0;
    }

    @media (min-width: 1200px) {
      font-size: 16px;
      padding: 23px 0;
    }
  }
  & ul > li.nav__list.active__page {
    ::after {
      display: block;
      content: " ";
      width: 100%;
      height: 2px;
      background-color: #3894ff;
      position: absolute;
      bottom: -1px;
      left: 0;
    }
  }
  color: #9d9d9d;
`;

export const Logo = styled.div`
  font-size: 17px;
  font-weight: 700;
  line-height: 1;
`;

export const Setting = styled.div`
  line-height: 0;
  padding-top: 12px;
  display: flex;
  align-items: center;
  & button {
    line-height: 0;
    margin-left: 7px;
  }
  & .login-signup {
    display: none;
    font-size: 14px;

    @media ${breakPoints.tablet} {
      display: block;
    }

    @media (min-width: 1200px) {
      display: block;
      font-size: 15px;
    }
  }
  @media (min-width: 1200px) {
    padding-top: 0;
  }
`;
