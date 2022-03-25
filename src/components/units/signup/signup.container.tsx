import { useMutation } from "@apollo/client";
import { ChangeEvent, createContext, useState } from "react";
import {
  IMutation,
  IMutationCheckTokenToEmailArgs,
  IMutationCreateUserArgs,
  IMutationSendTokenToEmailArgs,
} from "../../../commons/types/generated/types";
import SignUpUI from "./signup.presenter";
import {
  CHECK_TOKEN_TO_EMAIL,
  CREATE_USER,
  SEND_TOKEN_TO_EMAIL,
} from "./signup.queries";
import { ISignUpContext } from "./signup.types";

export const SignUpContext = createContext<ISignUpContext>({});

const valid = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  password:
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&()])[A-Za-z\d$@$!%*#?&()]{8,}$/,
};

export default function SignUp() {
  const [isAuth, setIsAuth] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [passMsg, setPassMsg] = useState("");
  const [checkMsg, setCheckMsg] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    token: "",
    password: "",
    chkPassword: "",
  });
  const { name, email, token, password } = input;

  const [sendTokenToEmail] = useMutation<
    Pick<IMutation, "sendTokenToEmail">,
    IMutationSendTokenToEmailArgs
  >(SEND_TOKEN_TO_EMAIL);
  const [checkTokenToEmail] = useMutation<
    Pick<IMutation, "checkTokenToEmail">,
    IMutationCheckTokenToEmailArgs
  >(CHECK_TOKEN_TO_EMAIL);
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChageInput = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInput({
      ...input,
      [key]: value,
    });

    if (key === "email" && valid.email.test(value)) {
      setIsEmail(true);
    }

    if (key === "password" && !valid.password.test(value)) {
      setPassMsg(
        "8글자 이상, 최소 1개 이상의 특수문자, 숫자가 포함되어야합니다."
      );
    }
    if (key === "password" && valid.password.test(value)) {
      setPassMsg("");
    }

    if (key === "chkPassword" && input.password !== value) {
      setCheckMsg("비밀번호가 일치하지 않습니다.");
    }
    if (key === "chkPassword" && input.password === value) {
      setCheckMsg("");
    }
  };

  const onClickSubmit = async () => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            name,
            email,
            password,
          },
        },
      });
      alert("어서오세요.");
    } catch (error) {
      if (error instanceof Error) alert("이메일을 다시 확인해주세요.");
    }
  };

  const onClickSendEmailToken = async () => {
    setIsEmail(false);
    setIsAuth(true);
    try {
      await sendTokenToEmail({
        variables: {
          email,
        },
      });
    } catch (error) {
      if (error instanceof Error) alert("이메일을 다시 확인해주세요.");
      setIsEmail(true);
      setIsAuth(false);
    }
  };

  const onClickCheckEmailToken = async () => {
    try {
      console.log(email, token);
      await checkTokenToEmail({
        variables: {
          email,
          token,
        },
      });
      alert("이메일 인증에 성공하였습니다.");
    } catch (error) {
      if (error instanceof Error) alert("인증번호가 일치하지 않습니다.");
    }
  };

  const onClickRequestPhoneAuth = () => {
    setIsEmail(false);
    setIsAuth(true);
  };

  const value = {
    isAuth,
    isEmail,
    setIsAuth,
    setIsEmail,
    onChageInput,
  };

  return (
    <SignUpContext.Provider value={value}>
      <SignUpUI
        onClickSendEmailToken={onClickSendEmailToken}
        onClickCheckEmailToken={onClickCheckEmailToken}
        passMsg={passMsg}
        checkMsg={checkMsg}
        isEmail={isEmail}
        onClickSubmit={onClickSubmit}
        onChageInput={onChageInput}
        onClickRequestPhoneAuth={onClickRequestPhoneAuth}
      />
    </SignUpContext.Provider>
  );
}
