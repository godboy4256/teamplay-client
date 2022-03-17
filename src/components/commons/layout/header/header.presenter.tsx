import * as S from "./header.styles";

export default function HeaderUi() {
  return <S.HeaderStyle>
    <S.HeaderTop>
      <h1>
        <S.Logo>TEAMPLAY</S.Logo>
      </h1>
      <S.Setting>
        <button>
          <img src="../img/alam.svg" />
        </button>
        <button>
          <img src="../img/btn.svg" />
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
    {/* 네비게이션은 있는 곳도 있고 없는 곳도 있어서 asPath로 추후에 작업해줘야 함 */}
  </S.HeaderStyle>;
}
