export interface IChattingDetailContext {
  position?: number;
  isToggle?: boolean;
  onClickSetPosition?: () => void;
}

export interface ISidebarWrapper {
  position: number | undefined;
}

export interface ISideIsToggle {
  isToggle: boolean | undefined;
}
