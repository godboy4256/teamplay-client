import {
  ChangeEvent,
  createContext,
  KeyboardEvent,
  useRef,
  useState,
} from "react";
import useMoveToPage from "../../commons/hooks/useMoveToPage";

import OnBoardingUI from "./onboarding.presenter";
import { IPropsOnBoardingContext } from "./onboarding.types";

export const OnBoardingContext = createContext<IPropsOnBoardingContext>({});

export default function OnBoarding() {
  const { moveToMain } = useMoveToPage();
  const [left, setLeft] = useState(0);
  const [career, setCareer] = useState("");
  const [tendency, setTendency] = useState<string[]>([]);
  const [position, setPosition] = useState("");
  const [interest, setInterest] = useState<string[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [tag, setTag] = useState("");
  const tagInputRef = useRef<HTMLInputElement>(null);

  const onClickChageInput = () => {
    setIsAdd(true);
    tagInputRef.current?.click();
  };

  const onChangeTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === "Enter") {
      if (tendency.includes(tag)) {
        return;
      }
      if (tendency.length === 3) {
        const temp = tendency;
        temp.shift();
        setTendency([...temp, tag]);
      } else {
        setTendency((prev) => [...prev, tag]);
      }
    }
  };

  const onClickMoveToNext = () => {
    if (
      (left === -100 && career === "") ||
      (left === -200 && tendency.length === 0) ||
      (left === -300 && position === "") ||
      (left === -400 && interest.length === 0)
    ) {
      alert("최소 1개이상 선택해야 합니다.");
      return;
    }
    setLeft((prev) => prev - 100);
  };

  const onClickMoveToPrev = () => {
    setLeft((prev) => prev + 100);
  };

  const onClickDeleteTag = (name: string) => () => {
    const temp = tendency.filter((el) => el !== name);
    console.log(name);
    setTendency([...temp]);
  };

  const onClickPushTag = (name: string) => () => {
    let temp: string[] = [];

    if (left === -100) {
      if (career === name) setCareer("");
      else setCareer(name);
      return;
    }

    if (left === -200) {
      if (tendency.includes(name)) {
        return;
      }
      if (tendency.length === 3) {
        temp = tendency;
        temp.shift();
        setTendency([...temp, name]);
      } else {
        setTendency((prev) => [...prev, name]);
      }

      return;
    }

    if (left === -300) {
      if (position === name) setPosition("");
      else setPosition(name);
      return;
    }

    if (interest.includes(name)) {
      temp = interest.filter((el) => el !== name);
      setInterest([...temp]);
    } else {
      if (interest.length === 3) {
        temp = interest;
        temp.shift();
        setInterest([...temp, name]);
      } else {
        setInterest((prev) => [...prev, name]);
      }
    }
  };

  const onClickSubmit = () => {
    moveToMain();
  };

  const value = {
    left,
    career,
    tendency,
    position,
    interest,
    isAdd,
    onClickChageInput,
    onChangeTagInput,
    onKeyPressEnter,
    onClickMoveToNext,
    onClickMoveToPrev,
    onClickSubmit,
    onClickPushTag,
    onClickDeleteTag,
  };

  return (
    <OnBoardingContext.Provider value={value}>
      <OnBoardingUI />
    </OnBoardingContext.Provider>
  );
}
