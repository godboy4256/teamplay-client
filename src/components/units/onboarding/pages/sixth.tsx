import Blank from "../../../commons/blank/blank";
import SubmitBtn from "../../../commons/button/Submit";
import * as S from "./pages.styles";

export default function OnBoardingSixthPage() {
  return (
    <S.Wrapper>
      <S.BackArrow />
      <S.Title>프로필 카드가 성공적으로 생성되었습니다!</S.Title>
      <S.Subscript>팀플에서 자유롭게 팀원을 구해보세요</S.Subscript>
      <Blank height={38} width={0} />
      <S.ProfileBox>
        <S.PictureBox>
          <img src="/img/user01.png" />
        </S.PictureBox>
        <S.InfoBox>
          <S.Name>제이든</S.Name>
          <S.Position>기획자</S.Position>
          <S.Tags></S.Tags>
        </S.InfoBox>
      </S.ProfileBox>
      <Blank width={0} height={150} />
      <SubmitBtn
        name="다음으로"
        radius={12}
        backgroundcolor="#c4c4c4"
        fontSize={16}
        color="#FFFFFF"
        border={true}
      />
    </S.Wrapper>
  );
}
