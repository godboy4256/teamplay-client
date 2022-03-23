import { ChangeEvent, KeyboardEvent, RefObject } from "react";

export interface IPropsOnBoardingContext {
  left?: number;
  career?: string;
  tendency?: string[];
  position?: string;
  interest?: string[];
  isAdd?: boolean;
  tagInputRef?: RefObject<HTMLInputElement>;
  onClickChageInput?: () => void;
  onChangeTagInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClickMoveToNext?: () => void;
  onClickMoveToPrev?: () => void;
  onClickSubmit?: () => void;
  onClickPushTag?: (name: string) => () => void;
  onClickDeleteTag?: (name: string) => () => void;
}

export interface IPropsOnBoardingUIWrapper {
  left: number | undefined;
}

export interface IPropsTag {
  bgColor: string;
}
