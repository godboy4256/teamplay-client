// import { gql } from "@apollo/client";
import * as S from "./searchbar.style";

interface IPropsSearchBarUI {
  isSearchBar: boolean;
  onClickSearchOn: () => void;
  onClickSearchOff: () => void;
  fetchProjectCount?: number | {};
}

// const SEARCH_PROJCETS = gql`
//   query searchProjects($search:String!){
//     searchProjects(search:$search){

//     }
//   }
// `;

export default function SearchBarUI(props: IPropsSearchBarUI) {
  return (
    <S.SearchBarStyle id="stick_header">
      <S.SearchBarTop>
        <div>
          <S.SearchInput type="text" placeholder="검색어를 입력해주세요." />
          <button onClick={props.onClickSearchOn}>
            <img src="/img/search.svg" alt="search icon" />
          </button>
        </div>
      </S.SearchBarTop>
      <S.SearchBarBottom>
        <div>
          총 <span>{props?.fetchProjectCount}</span> 건
        </div>
      </S.SearchBarBottom>
    </S.SearchBarStyle>
  );
}
