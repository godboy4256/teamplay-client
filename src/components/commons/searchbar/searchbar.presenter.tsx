import * as S from "./searchbar.style";

interface IPropsSearchBarUI {
  isSearchBar: boolean;
  onClickSearchOn: () => void;
  onClickSearchOff: () => void;
}

export default function SearchBarUI(props: IPropsSearchBarUI) {
  return (
    <S.SearchBarStyle>
      <S.SearchBarTop>
        <img src="../img/filter.svg" alt="search bar filter" />
        <div>
          <S.SearchInput type="text" placeholder="검색어를 입력해주세요." />
          <button onClick={props.onClickSearchOn}>
            <img src="../img/search.svg" alt="search icon" />
          </button>
        </div>
      </S.SearchBarTop>
      <S.SearchBarBottom>
        <div>총 10 건</div>
        <div>
          <span>최신순</span>
          <img src="../img/sort.svg" />
        </div>
      </S.SearchBarBottom>
    </S.SearchBarStyle>
  );
}
