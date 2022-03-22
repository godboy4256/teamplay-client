export interface IPropsOnBoardingContext {
  left?: number;
  career?: string;
  tendency?: string[];
  position?: string;
  interest?: string[];
  onClickMoveToNext?: () => void;
  onClickMoveToPrev?: () => void;
  onClickSubmit?: () => void;
  onClickPushTag?: (name: string) => () => void;
}

export interface IPropsOnBoardingUIWrapper {
  left: number | undefined;
}
