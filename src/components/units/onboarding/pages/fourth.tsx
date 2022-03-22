import { Fragment, useContext } from "react";
import Blank from "../../../commons/blank/blank";
import SubmitBtn from "../../../commons/button/Submit";
import ClickTag from "../../../commons/tags/commons/clickTag";
import { v4 as uuidv4 } from "uuid";
import * as S from "./pages.styles";
import { OnBoardingContext } from "../onboarding.container";

export default function OnBoardingFourthPage() {
  const { onClickMoveToNext, onClickMoveToPrev, onClickPushTag, position } =
    useContext(OnBoardingContext);
  const list = [
    "기획자",
    "UI디자이너",
    "UX디자이너",
    "UXUI디자이너",
    "프론트엔드",
    "백엔드",
    "풀스택",
  ];
  return (
    <S.Wrapper>
      <div>
        <S.BackArrow onClick={onClickMoveToPrev}>
          <img src="/img/commons/leftArrow1.svg" />
        </S.BackArrow>
        <S.Title>어떤 포지션을 맡고 싶으신가요?</S.Title>
        <S.Subscript>팀원님이 맡고 싶으신 포지션을 골라주세요.</S.Subscript>
        <Blank height={38} width={0} />
        <S.TagArea>
          {list.map((name) => (
            <Fragment key={uuidv4()}>
              <ClickTag
                name={name}
                marginBottom={16}
                backgroundColor={
                  position && position === name ? "#eaeaea" : "#ffffff"
                }
                onClick={onClickPushTag}
              />
            </Fragment>
          ))}
        </S.TagArea>
      </div>
      <S.BtnBox>
        <SubmitBtn
          onClick={onClickMoveToNext}
          name="다음으로"
          radius={12}
          backgroundcolor="#c4c4c4"
          fontSize={16}
          color="#FFFFFF"
          border={true}
        />
      </S.BtnBox>
    </S.Wrapper>
  );
}
