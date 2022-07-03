import * as S from "./searchbar.style";

interface IPropsSearchBarUI {
  isSearchBar: boolean;
  onClickSearchOn: (e: any) => void;
  onClickSearchOff: () => void;
  fetchProjectCount?: number | {};
}

export default function SearchBarUI(props: IPropsSearchBarUI) {
  return (
    <S.SearchBarStyle id="stick_header">
      <S.SearchBarTop>
        <form onSubmit={props.onClickSearchOn}>
          <S.SearchInput type="text" placeholder="검색어를 입력해주세요." />
          <button>
            <img src="/img/search.svg" alt="search icon" />
          </button>
        </form>
      </S.SearchBarTop>
      <S.SearchBarBottom>
        <div>
          총 <span>{props?.fetchProjectCount}</span> 건
        </div>
      </S.SearchBarBottom>
    </S.SearchBarStyle>
  );
}
