import { SetStateAction,Dispatch } from 'react';

export interface IPropsProjectManage {
    project?: string;
  }
  
  export interface IProjectManagement{
    onClickBoardAdd?: () => void
    setContent?:Dispatch<SetStateAction<string>>
    setTitle?:Dispatch<SetStateAction<string>>
    validContent?:boolean
    validTitle?:boolean
  }
  