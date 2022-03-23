import { ChangeEvent, createContext, useState } from "react";
import SignUpUI from "./signup.presenter";
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
    password: "",
    chkPassword: "",
  });

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

  const onClickSubmit = () => {
    console.log("아직");
  };

  const onClickRequestEmailAuth = () => {
    setIsEmail(false);
    setIsAuth(true);
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
        passMsg={passMsg}
        checkMsg={checkMsg}
        isEmail={isEmail}
        onClickSubmit={onClickSubmit}
        onChageInput={onChageInput}
        onClickRequestPhoneAuth={onClickRequestPhoneAuth}
        onClickRequestEmailAuth={onClickRequestEmailAuth}
      />
    </SignUpContext.Provider>
  );
}
