import { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IChattingDetailContext {
  position?: number;
  isToggle?: boolean;
  userName?: string | undefined;
  data?: Pick<IQuery, "fetchChats"> | undefined;
  setUserName?: Dispatch<SetStateAction<string>>;
  onClickSetPosition?: () => void;
  onChangeChatInput?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSendMessage?: () => void;
}

export interface IPropsChattingDetailUI {
  ChattingBoxRef: RefObject<HTMLUListElement>;
}

export interface ISidebarWrapper {
  position: number | undefined;
}

export interface ISideIsToggle {
  isToggle: boolean | undefined;
}

export interface IMessageData {
  chatRoom: string;
  content: string;
  createdAt: string;
  id: number;
  user: {
    career: string;
    createdAt: string;
    deletedAt: any;
    email: string;
    id: string;
    name: string;
    password: string;
    point: number;
  };
}
