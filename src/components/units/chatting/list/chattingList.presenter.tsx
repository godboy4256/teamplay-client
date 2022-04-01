import { useContext } from "react";
import { ChattingContext } from "../chatting.container";
import * as S from "./chattingList.styles";
import { IPropsChattingListUI } from "./chattingList.types";
import { v4 as uuidv4 } from "uuid";

export default function ChattingListUI(props: IPropsChattingListUI) {
  const { onClickChangePosition, onClickSetRoomId } =
    useContext(ChattingContext);
  return (
    <S.Wrapper onClick={onClickChangePosition}>
      <S.TitleBox>
        <S.LeftArrowImg src="/img/commons/leftArrow1.svg" />
        <S.Title>메세지</S.Title>
        <S.DotToggleImg src="/img/commons/dotToggle.svg" />
      </S.TitleBox>
      {props.data?.map((data) => (
        <S.ChattingBox
          key={uuidv4()}
          onClick={onClickSetRoomId && onClickSetRoomId(data.id)}
        >
          <S.LeftBox>
            <S.ProfileBox>
              <img src="/img/chatting/smalluser1.png" />
            </S.ProfileBox>
            <S.MiddleBox>
              <S.Name>{data.name}</S.Name>
              <S.Contents>안녕하세요! 개발자 제이든입니다. 😀</S.Contents>
            </S.MiddleBox>
          </S.LeftBox>
          <S.RightBox>
            <span>1:04 AM</span>
          </S.RightBox>
        </S.ChattingBox>
      ))}
    </S.Wrapper>
  );
}
