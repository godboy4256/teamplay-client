import { Dispatch, SetStateAction } from "react";

export interface IPropsChattingUIWrapper {
  left: number | undefined;
}

export interface IChattingContext {
  left?: number;
  chatRoomId?: string;
  setLeft?: Dispatch<SetStateAction<number>>;
  onClickChangePosition?: () => void;
  onClickSetRoomId?: (_id: string) => () => void;
}
