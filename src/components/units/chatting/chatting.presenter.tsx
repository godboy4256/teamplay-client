import * as S from "./chatting.styles";
import ChattingDetail from "./detail/chattingDetail.container";
import ChattingList from "./list/chattingList.container";

export default function ChattingUI() {
  return (
    <S.Wrapper>
      <S.ListBox>
        <ChattingList />
      </S.ListBox>
      <S.DetailBox>
        <ChattingDetail />
      </S.DetailBox>
    </S.Wrapper>
  );
}
