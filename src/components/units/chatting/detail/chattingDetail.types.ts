import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  RefObject,
  SetStateAction,
} from "react";
import {
  IChatRoomMember,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IChattingDetailContext {
  position?: number;
  isToggle?: boolean;
  userName?: string | undefined;
  data?: Pick<IQuery, "fetchChats"> | undefined;
  message?: string;
  setUserName?: Dispatch<SetStateAction<string>>;
  onClickSetPosition?: () => void;
  onChangeChatInput?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSendMessage?: () => void;
}

export interface IPropsChattingDetailUI {
  ChattingBoxRef: RefObject<HTMLUListElement>;
  sendRef: RefObject<HTMLDivElement>;
  wrapperRef: RefObject<HTMLDivElement>;
  roomName: string;
  onkeyPressEnter: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}

export interface ISidebarWrapper {
  position: number | undefined;
}

export interface ISideIsToggle {
  isToggle: boolean | undefined;
}

export interface IPropsChattingDetailUIWrapper {
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

// sidebar
export interface IPropsSidebarUI {
  data: Pick<IQuery, "fetchChatRoomMembers"> | undefined;
  isChoose: boolean;
  checkList: IChatRoomMember[];
  isCheck: string[];
  price: number | string | undefined;
  isSubmit: boolean;
  isSelf: boolean;
  onClickStartProject: () => void;
  onClickProjectSetting: () => void;
  onChangeCheckedUser: (data: IChatRoomMember) => () => void;
  onChangeSelectPrice: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeInputPrice: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IPropsSidebarSubmitBtn {
  isSubmit: boolean;
}
