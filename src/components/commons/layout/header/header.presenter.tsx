import useMoveToPage from "../../hooks/useMoveToPage";
import * as S from "./header.styles";
import { IPropsHeaderUI } from "./header.types";

export default function HeaderUI(props: IPropsHeaderUI) {
  const { onClickHeaderRouting } = useMoveToPage();
  return (
    <S.HeaderStyle>
      <div>
      <S.HeaderTop>
        <h1>
          <S.Logo>
            <img src="/img/commons/logo.svg" alt="logo" />
          </S.Logo>
        </h1>
        {!props.isHiddenNav && (
        <S.HeaderNav>
          <ul>
            <li onClick={onClickHeaderRouting} id="/main" className="nav__list">
              홈
            </li>
            <li
              onClick={onClickHeaderRouting}
              id="/project/list"
              className="nav__list"
            >
              프로젝트
            </li>
            <li
              onClick={onClickHeaderRouting}
              id="/profile"
              className="nav__list"
            >
              팀원
            </li>
            <li
              onClick={onClickHeaderRouting}
              id="/community/list"
              className="nav__list"
            >
              커뮤니티
            </li>
          </ul>
        </S.HeaderNav>
      )}
      </S.HeaderTop>
        <S.Setting>
          <button className="login-signup">
            로그인 / 회원가입
          </button>
          <div className="user-arvata">
          </div>
          <button className="alam">
            <img src="/img/alam.svg" />
          </button>
          <button>
            <img src="/img/btn.svg" />
          </button>
        </S.Setting>
        </div>
    </S.HeaderStyle>
  );
}
