import MultiSlide from "../../commons/slider/component/multislide/multislide.container";
import MultiSlide2 from "../../commons/slider/component/multislide/multislide2.container";
import OneSlide from "../../commons/slider/component/oneslide/oneslide.container";
import * as S from "./main.styles";

export default function MainPage() {
    return (
        <S.MainBox>
            <OneSlide
                slideToShow={1}
            />
            <S.MainTop>
                <S.ContentsHeader>
                    <h3>
                        제이슨님,<br />
                        이런 프로젝트는 어떠세요?💡
                    </h3>
                    <button>{"더보기 >"}</button>
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
                <MultiSlide2 />
            </S.MainBottom>
        </S.MainBox>
    );
}
