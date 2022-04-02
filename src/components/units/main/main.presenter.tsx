import MultiSlide from "../../commons/slider/component/multislide/multislide.container";
import MultiSlide2 from "../../commons/slider/component/multislide/multislide2.container";
import MainSlide from "../../commons/slider/component/mainslide/mainslide";
import * as S from "./main.styles";
import { Wrapper } from "../../../commons/styles/commonStyls";

interface IMainPage {
  onClickProjects: () => void;
}

export default function MainPage(props: IMainPage) {
  return (
    <S.MainBox>
      <MainSlide />
      <Wrapper paddingTop={0}>
        <S.MainTop>
          <S.ContentsHeader>
            <h3>
              제이슨님,
              <br />
              이런 프로젝트는 어떠세요?💡
            </h3>
            <button onClick={props.onClickProjects}>{"더보기 >"}</button>
          </S.ContentsHeader>
          <MultiSlide />
        </S.MainTop>
        <S.MainBottom>
          <S.ContentsHeader>
            <h3>
              팀원을 구해요
              <img src="../img/req.svg" alt="req title" />
            </h3>
            <button>{"더보기 >"}</button>
          </S.ContentsHeader>
          <MultiSlide2 slideToShow={5} />
        </S.MainBottom>
      </Wrapper>
    </S.MainBox>
  );
}
