import { useEffect, useState } from "react";
import LoginUI from "./login.presenter";

export default function Login() {
  const [isView, setIsView] = useState(false);
  const [type, setType] = useState("password");

  useEffect(() => {
    if (isView) setType("text");
    else setType("password");
  }, [isView]);

  const onClickSetIsView = () => {
    setIsView((prev) => !prev);
  };

  return (
    <LoginUI type={type} isView={isView} onClickSetIsView={onClickSetIsView} />
  );
}
