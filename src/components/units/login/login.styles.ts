import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/breakpoint";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 930px) and (max-width: 1199px) {
    padding: 100px;
  }

  @media ${breakPoints.web} {
    padding: 100px;
  }
`;

export const TabletBox = styled.div`
  display: flex;
  max-width: 799px;

  @media (min-width: 930px) and (max-width: 1199px) {
    max-width: 1200px;
  }

  @media ${breakPoints.web} {
    max-width: 1200px;
  }
`;

export const WebImgBox = styled.div`
  display: none;

  @media (min-width: 930px) and (max-width: 1199px) {
    display: block;
    margin-right: 65px;
    width: 463.5px;
    height: 777px;

    img {
      width: 100%;
      border-radius: 20px;
    }
  }

  @media ${breakPoints.web} {
    display: block;
    width: 463.5px;
    height: 777px;
    margin-right: 65px;

    img {
      width: 100%;
      border-radius: 20px;
    }
  }
`;

export const LoginBox = styled.div`
  width: 375px;

  padding: 20px 20px 40px 20px;
`;

export const XmarkBox = styled.div`
  position: relative;
  margin-bottom: 72px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Subscript = styled.div`
  margin-bottom: 80px;
  span {
    display: block;

    font-family: GLight;
    font-weight: 300;
    font-size: 1rem;
    line-height: 20px;
    text-align: center;
    color: #999999;
  }
`;

export const EmailInput = styled.input`
  width: 100%;

  margin-bottom: 10px;
  border-bottom: 1px solid #c4c4c4;
  padding: 13px 0px;

  font-weight: 500;
  font-size: 1.143rem;
  line-height: 18px;

  ::placeholder {
    font-weight: 500;
    font-size: 1.143rem;
    line-height: 18px;
    color: #999999;
  }
`;

export const PassBox = styled.div`
  display: flex;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 12px;

  input {
    width: 100%;
    padding: 13px 0px;

    font-weight: 500;
    font-size: 1.143rem;
    line-height: 18px;

    ::placeholder {
      font-weight: 500;
      font-size: 1.143rem;
      line-height: 18px;
      color: #999999;
    }
  }
`;

export const EyeImg = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  img {
    height: 25%;
  }

  :hover {
    cursor: pointer;
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 36px 0px;

  font-weight: 500;
  font-size: 1rem;
  line-height: 16px;
  color: #999999;
`;

export const SocialText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #999999;
`;

export const SocialImgBox = styled.div`
  /* padding: 0% 25%; */
  margin-bottom: 127px;
  display: flex;
  justify-content: center;

  div {
    width: 168px;
    display: flex;
    justify-content: space-between;
  }

  img {
    height: 36px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const Cancel = styled.button`
  width: 100%;
  padding: 12px 0px;
  border: 1px solid #e9e9e9;
  border-radius: 20px;
  background-color: #fff;

  font-weight: 500;
  font-size: 1rem;
  line-height: 16px;
  color: #999999;
`;
