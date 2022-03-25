import * as S from "./chattingList.styles";

export default function ChattingListUI() {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.LeftArrowImg src="/img/commons/leftArrow1.svg" />
        <S.Title>메세지</S.Title>
        <S.DotToggleImg src="/img/commons/dotToggle.svg" />
      </S.TitleBox>
      <S.ChattingBox>
        <S.LeftBox>
          <S.ProfileBox>
            <img src="/img/chatting/smalluser1.png" />
          </S.ProfileBox>
          <S.MiddleBox>
            <S.Name>제이든</S.Name>
            <S.Contents>안녕하세요! 개발자 제이든입니다. 😀</S.Contents>
          </S.MiddleBox>
        </S.LeftBox>
        <S.RightBox>
          <span>1:04 AM</span>
        </S.RightBox>
      </S.ChattingBox>
      <S.ChattingBox>
        <S.LeftBox>
          <S.ProfileBox>
            <img src="/img/chatting/smalluser3.png" />
          </S.ProfileBox>
          <S.MiddleBox>
            <S.Name>
              <S.Tag>Project</S.Tag>
              <S.ProjectName>프로젝트 단톡방</S.ProjectName>
              <S.Count>5</S.Count>
            </S.Name>
            <S.Contents>안녕하세요! 개발자 제이든입니다. 😀</S.Contents>
          </S.MiddleBox>
        </S.LeftBox>
        <S.RightBox>
          <span>1:04 AM</span>
        </S.RightBox>
      </S.ChattingBox>
    </S.Wrapper>
  );
}
