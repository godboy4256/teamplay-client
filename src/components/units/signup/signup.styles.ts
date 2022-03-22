import styled from "@emotion/styled";
import { IPropsSignUpStyles, IPropsValidBtn } from "./signup.types";

export const Wrapper = styled.div`
  width: 100%;

  padding: 18px 18px 40px 18px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 60px;

  font-weight: 500;
  font-size: 20px;
  color: #9d9d9d;
`;

export const Name = styled.div`
  margin-bottom: 5px;

  font-weight: 500;
  font-size: 16px;

  color: #9d9d9d;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 8px;
  border: 1px solid #cacaca;

  font-weight: 500;
  font-size: 14px;

  ::placeholder {
    color: #c4c4c4;
  }
`;

export const Auth = styled.div`
  input {
    width: calc(100% - 107px);
    padding: 12px 8px;
    margin-right: 6px;
    margin-bottom: 4px;
    border: 1px solid #cacaca;

    font-weight: 500;
    font-size: 14px;

    ::placeholder {
      color: #c4c4c4;
    }
  }
`;

export const AuthBtn = styled.button`
  background-color: ${(props: IPropsSignUpStyles) =>
    props.isEmail ? "#c4c4c4" : "#E5E5E5"};
  padding: 13px 8px;
  font-weight: 500;
  font-size: 14px;

  color: ${(props: IPropsSignUpStyles) =>
    props.isEmail ? "#ffffff" : "#c4c4c4"};

  :hover {
    cursor: ${(props: IPropsSignUpStyles) =>
      props.isEmail ? "pointer" : "auto"};
  }
`;

export const AuthInputBox = styled.div`
  display: flex;
  border: 1px solid #cacaca;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props: IPropsValidBtn) => props.isAuth && "4px"};
  }
`;

export const ValidBtn = styled.button`
  display: ${(props: IPropsValidBtn) => (props.isAuth ? "inline" : "none")};
  padding: 6px 8px;
  border: 1px solid #cacaca;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #c4c4c4;
`;

export const AuthInput = styled.input`
  width: ${(props: IPropsValidBtn) =>
    props.isAuth ? "calc(100% - 50px)" : "100%"};
  padding: 12px 8px;
  background-color: ${(props: IPropsValidBtn) =>
    props.isAuth ? "#FFFFFF" : "#E5E5E5"};

  font-weight: 500;
  font-size: 14px;

  ::placeholder {
    color: #c4c4c4;
  }
`;

export const Message = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 12px;

  color: #9b9898;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  span {
    font-weight: 500;
    font-size: 14px;

    color: #9d9d9d;
  }

  input {
    width: 16px;
    height: 16px;
    margin-right: 5px;

    border-radius: 5px;
  }
`;
