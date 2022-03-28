import { createContext, useState } from "react";
import ChattingUI from "./chatting.presenter";
import { IChattingContext } from "./chatting.types";

export const ChattingContext = createContext<IChattingContext>({});

export default function Chatting() {
  const [left, setLeft] = useState(0);

  const onClickChangePosition = () => {
    if (left === 0) setLeft(-100);
    else setLeft(0);
  };

  const value = {
    left,
    setLeft,
    onClickChangePosition,
  };

  return (
    <ChattingContext.Provider value={value}>
      <ChattingUI />
    </ChattingContext.Provider>
  );
}
