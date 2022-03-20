import Blank from "../../commons/blank/blank";
import SubmitBtn from "../../commons/button/Submit";
import Xmark from "../../commons/button/Xmark";
import * as S from "./signup.styles";

export default function SignUpUI() {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <span>회원가입</span>
        <Xmark width={16} height={16} />
      </S.TitleBox>
      <S.Name>이름</S.Name>
      <S.Input type="text" placeholder="이름을 입력해주세요." />
      <Blank width={0} height={40} />
      <S.Name>이메일 주소</S.Name>
      <S.Auth>
        <input type="text" placeholder="이메일 주소를 입력해주세요." />
        <button>인증번호 받기</button>
      </S.Auth>
      <S.Input type="text" placeholder="인증번호를 입력해주세요." />
      <S.PhoneAuth>
        <Blank width={0} height={40} />
        <S.Name>휴대폰번호 인증</S.Name>
        <S.Auth>
          <input type="text" placeholder="이메일 주소를 입력해주세요." />
          <button>인증번호 받기</button>
        </S.Auth>
        <S.Input type="text" placeholder="인증번호를 입력해주세요." />
      </S.PhoneAuth>
      <Blank width={0} height={40} />
      <S.Name>비밀번호</S.Name>
      <S.Input type="password" placeholder="비밀번호를 입력해주세요." />
      <S.ErrorMsg>8자 이상 입력해주세요.</S.ErrorMsg>
      <Blank width={0} height={20} />
      <S.Name>비밀번호 확인</S.Name>
      <S.Input
        type="password"
        placeholder="비밀번호를 다시 한 번 입력해주세요."
      />
      <Blank width={0} height={129} />
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
        name="계정 만들기"
        radius={12}
        fontSize={16}
        backgroundcolor="#c4c4c4"
        border={false}
        color="#FFFFFF"
      />
    </S.Wrapper>
  );
}
