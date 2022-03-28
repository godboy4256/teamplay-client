import { RefObject } from "react";

export interface IPropsProfileEditContext{
    tendency?: string[];
    isAdd?: boolean;
    isVisible?: boolean
    isVisibleTwo?: boolean
    isVisibleThree?: boolean
    isVisibleFour?: boolean
    area?: number
    tagInputRef?: RefObject<HTMLInputElement>;
    onClickChangeInput?: () => void;
    onClickPushTag?: (name: string) => () => void;
    onClickEditTendency?: () => void
    onClickEditPosition?: () => void
    onClickEditInterest?: () => void
    onClickEditTechnic?: () => void
    onClickBasicInfoEdit?: () => void
    // onClickEditTag?: () => void
    onClickDeleteTag?: (name: string) => () => void
}

export interface IPropsTag {
    bgColor: string
}

export interface ISidebarWrapper {
    area: number | undefined;
}