import { ChangeEvent } from "react";

export interface IPropsLoginUI {
  type: string;
  isView: boolean;
  onClickSetIsView: () => void;
  onChangeLoginInput: (
    name: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmitLogin: () => void;
  onClickLogout: () => void;
}
