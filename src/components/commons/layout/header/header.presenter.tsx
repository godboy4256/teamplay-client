import * as S from "./header.styles";

export default function HeaderUI() {
  return <S.HeaderStyle>
    <S.HeaderTop>
      <h1>
        <S.Logo>TEAMPLAY</S.Logo>
      </h1>
      <S.Setting>
        <button>
          <img src="/img/alam.svg" />
        </button>
        <button>
          <img src="/img/btn.svg" />
        </button>
      </S.Setting>
    </S.HeaderTop>
    <S.HeaderNav>
      <ul>
        <li>홈</li>
        <li>프로젝트</li>
        <li>팀원</li>
        <li>커뮤니티</li>
      </ul>
    </S.HeaderNav>
  </S.HeaderStyle>;
}
