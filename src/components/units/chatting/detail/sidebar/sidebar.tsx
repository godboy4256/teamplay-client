import * as S from "./sidebar.styles";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ChattingDetailContext } from "../chattingDetail.container";
export default function Sidebar() {
  const { position, onClickSetPosition } = useContext(ChattingDetailContext);
  const testList = [
    "냥1",
    "냥2",
    "냥3",
    "냥4",
    "냥5",
    "냥6",
    "냥7",
    "냥8",
    "냥9",
    "냥10",
  ];
  return (
    <S.Wrapper position={position}>
      <S.TitleBox>
        <S.RightBox>
          <S.ProjectName>프로젝트 단톡방</S.ProjectName>
          <S.Count>5</S.Count>
        </S.RightBox>
        <S.Xmark src="/img/preview/Xmark.svg" onClick={onClickSetPosition} />
      </S.TitleBox>
      <S.SubTitleBox>
        <S.SubTitle>대화 상대</S.SubTitle>
        <S.Tag>프로젝트 시작</S.Tag>
      </S.SubTitleBox>
      {testList.map((name, idx) => (
        <S.UserProfileBox key={uuidv4()}>
          <S.ProfileImg>
            <S.Profile>
              <img src="/img/임시사진.png" />
            </S.Profile>
          </S.ProfileImg>
          <S.NameBox>
            <S.Name>{name}</S.Name>
            <S.SelectCircle>
              <input type="checkbox" id={String(idx)} />
              <label htmlFor={String(idx)} />
            </S.SelectCircle>
          </S.NameBox>
        </S.UserProfileBox>
      ))}
    </S.Wrapper>
  );
}
