import Blank from "../../../commons/blank/blank";
import { v4 as uuidv4 } from "uuid";
import * as S from "./pages.styles";
import { Fragment } from "react";
import ClickTag from "../../../commons/tags/commons/clickTag";
import SubmitBtn from "../../../commons/button/Submit";

export default function OnBoardingSecondPage() {
  const list = ["대학생", "취준생", "신입~2년차"];
  return (
    <S.Wrapper>
      <S.BackArrow>
        <img src="/img/commons/leftArrow1.svg" />
      </S.BackArrow>
      <S.Title>몇년차 개발자/디자이너이신가요?</S.Title>
      <S.Subscript>저희 어플은 주니어 팀원위주의 플렛폼입니다.</S.Subscript>
      <Blank height={38} width={0} />
      <S.TagArea>
        {list.map((name) => (
          <Fragment key={uuidv4()}>
            <ClickTag name={name} marginBottom={16} />
          </Fragment>
        ))}
      </S.TagArea>
      <Blank height={432} width={0} />
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
