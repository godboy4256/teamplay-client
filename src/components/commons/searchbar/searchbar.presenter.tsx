import { useContext } from "react";
import { ProjectListContext } from "../../units/project/list/projectList.presenter";
import * as S from "./searchbar.style";

export default function SearchBarUI() {
    const {
        projectListCount
    } = useContext(ProjectListContext)
    return (
        <S.SearchBarStyle>
            <S.SearchBarTop>
                <img src="../img/filter.svg" alt="search bar filter" />
                <img src="../img/search.svg" alt="search icon" />
            </S.SearchBarTop>
            <S.SearchBarBottom>
                <div>총 {projectListCount} 건</div>
                <div>
                    <span>최신순</span>
                    <img src="../img/sort.svg" />
                </div>
            </S.SearchBarBottom>
        </S.SearchBarStyle>
    );
};