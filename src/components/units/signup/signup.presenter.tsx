import { useContext } from "react";
import Blank from "../../commons/blank/blank";
import SubmitBtn from "../../commons/button/Submit";
import Xmark from "../../commons/button/Xmark";
import Auth from "./auth";
import { SignUpContext } from "./signup.container";
import * as S from "./signup.styles";
import { IPropsSignUpUI } from "./signup.types";

export default function SignUpUI(props: IPropsSignUpUI) {
  const { onChageInput } = useContext(SignUpContext);
  return (
    <S.Wrapper>
      <S.TitleBox>
        <span>회원가입</span>
        <Xmark width={16} height={16} />
      </S.TitleBox>
      <S.Name>이름</S.Name>
      <S.Input type="text" placeholder="이름을 입력해주세요." maxLength={5} />
      <Blank width={0} height={40} />
      <Auth
        name="이메일 주소"
        placeHolder="이메일 주소를 입력해주세요."
        request={props.onClickRequestEmailAuth}
      />
      {/* <Blank width={0} height={40} />
      <Auth
        name="휴대폰번호 인증"
        placeHolder="휴대폰번호를 입력해주세요."
        request={props.onClickRequestEmailAuth}
      /> */}
      <Blank width={0} height={40} />
      <S.Name>비밀번호</S.Name>
      <S.Input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={onChageInput && onChageInput("password")}
      />
      <S.Message>{props.passMsg}</S.Message>
      <Blank width={0} height={20} />
      <S.Name>비밀번호 확인</S.Name>
      <S.Input
        type="password"
        placeholder="비밀번호를 다시 한 번 입력해주세요."
        onChange={onChageInput && onChageInput("chkPassword")}
      />
      <S.Message>{props.checkMsg}</S.Message>
      <Blank width={0} height={90} />
      <S.CheckBox>
        <input type="checkbox" />
        <span>개인정보 수집에 동의합니다.</span>
      </S.CheckBox>
      <S.CheckBox>
        <input type="checkbox" />
        <span>이용약관에 동의합니다.</span>
      </S.CheckBox>
      <Blank width={0} height={10} />
      <SubmitBtn
        onClick={props.onClickSubmit}
        name="계정 만들기"
        fontSize={1.143}
        backgroundcolor="#3894FF"
      />
    </S.Wrapper>
  );
}
