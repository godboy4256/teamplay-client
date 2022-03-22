import { Fragment } from "react";
import Blank from "../../../commons/blank/blank";
import ClickTag from "../../../commons/tags/commons/clickTag";
import { v4 as uuidv4 } from "uuid";
import * as S from "./pages.styles";
import SubmitBtn from "../../../commons/button/Submit";

export default function OnBoardingThirdPage() {
  const list = [
    "꼼꼼한",
    "냉정한",
    "친절한",
    "논리적인",
    "상냥한",
    "열정적인",
    "끈기있는",
    "감성적인",
    "여유있는",
    "모험적인",
    "완벽주의",
    "능동적인",
    "신중한",
    "분석적인",
  ];
  return (
    <S.Wrapper>
      <S.BackArrow>
        <img src="/img/commons/leftArrow1.svg" />
      </S.BackArrow>
      <S.Title>작업할 때 어떤 성향이신가요?</S.Title>
      <S.Subscript>
        팀원님을 가장 잘 나타내는 단어를 3개 골라주세요.
      </S.Subscript>
      <Blank height={38} width={0} />
      <S.TagArea>
        {list.map((name) => (
          <Fragment key={uuidv4()}>
            <ClickTag name={name} marginBottom={16} />
          </Fragment>
        ))}
      </S.TagArea>
      <S.AddTag>+직접 추가하기</S.AddTag>
      <Blank height={240} width={0} />
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
