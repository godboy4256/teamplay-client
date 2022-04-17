import {
  MouseEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  LegacyRef,
} from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsCommentUI {
  onSubmitComment: (e: MouseEvent<HTMLFormElement>) => void;
  onSubmitCommentUpdate: (
    target: string,
    inputId: string,
    contentId: string
  ) => (e: MouseEvent<HTMLButtonElement>) => void;
  onChangeQnaType: (e: ChangeEvent<HTMLSelectElement>) => void;
  qnas: Pick<IQuery, "fetchQnas">[] | undefined;
  user: string;
  refContent?: LegacyRef<HTMLTextAreaElement> | undefined;
  setTitle?: Dispatch<SetStateAction<string>>;
  onClickDeleteQna?: (target: string) => () => void;
  onClickUpdateFormOn?: () => void;
  updateForm: boolean;
  setUpdateForm?: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsComment {
  projectId: string;
}
