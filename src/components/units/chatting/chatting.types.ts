import { Dispatch, SetStateAction } from "react";

export interface IPropsChattingUIWrapper {
  left: number | undefined;
}

export interface IChattingContext {
  left?: number;
  setLeft?: Dispatch<SetStateAction<number>>;
  onClickChangePosition?: () => void;
}
