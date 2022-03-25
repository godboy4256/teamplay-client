import * as S from "./header.styles";

export default function HeaderUI(props:any) {
  return <S.HeaderStyle>
    <S.HeaderTop>
      <h1>
        <S.Logo>
          <img src="/img/commons/logo.svg" alt="logo" />
        </S.Logo>
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
    {
      !props.isHiddenNav &&
         <S.HeaderNav>
         <ul>
           <li onClick={props.onClickRouting} id="/main" className="nav__list">홈</li>
           <li onClick={props.onClickRouting} id="/project/list" className="nav__list">프로젝트</li>
           <li onClick={props.onClickRouting} id="/profile" className="nav__list">팀원</li>
           <li onClick={props.onClickRouting} id="community/list" className="nav__list">커뮤니티</li>
         </ul>
       </S.HeaderNav>
    }

  </S.HeaderStyle>;
}
