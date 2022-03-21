import * as S from "./searchbar.style";

export default function SearchBarUI() {
    return (
        <S.SearchBarStyle>
            <S.SearchBarTop>
                <img src="../img/filter.svg" alt="search bar filter" />
                <img src="../img/search.svg" alt="search icon" />
            </S.SearchBarTop>
            <S.SearchBarBottom>
                <div>총 323건</div>
                <div>
                    <span>최신순</span>
                    <img src="../img/sort.svg" />
                </div>
            </S.SearchBarBottom>
        </S.SearchBarStyle>
    );
};