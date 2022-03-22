import SubmitBtn from "../../commons/button/Submit";
import * as S from "./login.styles";
import { IPropsLoginUI } from "./login.types";

export default function LoginUI(props: IPropsLoginUI) {
  return (
    <S.Wrapper>
      <S.LogoBox>TEAMPLAY</S.LogoBox>
      <S.EmailInput type="text" placeholder="이메일" />
      <S.PassBox>
        <input type={props.type} placeholder="비밀번호" />
        <S.EyeImg>
          {props.isView ? (
            <img
              src="/img/login/eyeSlash.svg"
              onClick={props.onClickSetIsView}
            />
          ) : (
            <img src="/img/login/eye.svg" onClick={props.onClickSetIsView} />
          )}
        </S.EyeImg>
      </S.PassBox>
      <SubmitBtn
        name="이메일로 로그인"
        fontSize={16}
        radius={12}
        backgroundcolor="#c4c4c4"
        border={false}
        color="#FFFFFF"
      />
      <S.TextBox>또는</S.TextBox>
      <S.SocialText>SNS계정으로 로그인하기</S.SocialText>
      <S.SocialImgBox>
        <div>
          <img src="/img/login/kakao.png" />
          <img src="/img/login/naver.png" />
          <img src="/img/login/google.png" />
        </div>
      </S.SocialImgBox>
      <SubmitBtn
        name="계정이 없으신가요? 간편가입하기"
        fontSize={16}
        radius={12}
        backgroundcolor="#FFFFFF"
        border={true}
        color="#c4c4c4"
      />
    </S.Wrapper>
  );
}
