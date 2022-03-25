import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import {
  IMutation,
  IMutationLoginArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import LoginUI from "./login.presenter";
import { FETCH_USER, LOGIN, LOGOUT } from "./login.queries";

export default function Login() {
  const { setAccessToken } = useContext(GlobalContext);
  const [isView, setIsView] = useState(false);
  const [type, setType] = useState("password");
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);

  useEffect(() => {
    if (isView) setType("text");
    else setType("password");
  }, [isView]);

  console.log(data);

  const onClickSetIsView = () => {
    setIsView((prev) => !prev);
  };

  const onChangeLoginInput =
    (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setLoginInput({
        ...loginInput,
        [name]: e.target.value,
      });
    };

  const onClickSubmitLogin = async () => {
    if (!setAccessToken) return;

    try {
      const result = await login({
        variables: {
          ...loginInput,
        },
      });
      setAccessToken(result.data?.login.accessToken || "");
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickLogout = () => {
    logout();
  };

  return (
    <LoginUI
      type={type}
      isView={isView}
      onClickSetIsView={onClickSetIsView}
      onChangeLoginInput={onChangeLoginInput}
      onClickSubmitLogin={onClickSubmitLogin}
      onClickLogout={onClickLogout}
    />
  );
}
