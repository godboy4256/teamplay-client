import { createContext, useState } from "react";
import ChattingDetailUI from "./chattingDetail.presenter";
import { IChattingDetailContext } from "./chattingDetail.types";

export const ChattingDetailContext = createContext<IChattingDetailContext>({});

export default function ChattingDetail() {
  const [position, setPosition] = useState(-100);
  const [isToggle, setIsToggle] = useState(false);
  const onClickSetPosition = () => {
    if (position === -100) {
      setPosition(-30);
      setIsToggle(true);
    } else {
      setPosition(-100);
      setIsToggle(false);
    }
  };
  const value = {
    isToggle,
    position,
    onClickSetPosition,
  };
  return (
    <ChattingDetailContext.Provider value={value}>
      <ChattingDetailUI />
    </ChattingDetailContext.Provider>
  );
}
