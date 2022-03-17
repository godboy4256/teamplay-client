// import PreviewProfile from "../../commons/preview/profile/previewProfile.container";
import PreviewProject from "../../commons/preview/project/previewProject.container";
import * as S from "./home.styles";

export default function HomeUI() {
  return (
    <S.Wrapper>
      {/* <PreviewProfile /> */}
      <PreviewProject />
    </S.Wrapper>
  );
}
