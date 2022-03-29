import { Fragment, useContext } from "react";
import { Wrapper } from "../../../commons/styles/commonStyls";
import MultiSlide2 from "../../commons/slider/component/multislide/multislide2.container";
import { RecruitContext } from "./recruit.container";
import * as S from "./recruit.styles";

export interface ISideHiddenSearchBar {
    area: number | undefined
}

export default function RecruitUI() {
    const {
        isSearchBar,
        onClickSearchImg,
        onClickSearchfilter
    } = useContext(RecruitContext)

    return(
        <Wrapper paddingTop={0}>
            <S.SearchBarWrapper>
                <S.SearchBar>
                    <img onClick={onClickSearchfilter} src="../img/filter.svg" alt="search bar filter" />
                    {isSearchBar ? (
                        <Fragment>
                            <S.SearchInputBar>
                                <img onClick={onClickSearchImg} src="../img/search.svg" alt="search icon" />
                                <input placeholder="검색어를 입력해주세요."/>
                            </S.SearchInputBar>
                            <>
                                <img onClick={onClickSearchImg} src="../img/preview/Xmark.svg" alt="Xmark Icon"/>
                            </>
                        </Fragment>
                    ) : (
                        <>
                        <img onClick={onClickSearchImg} src="../img/search.svg" alt="search icon" />
                        </>
                    )}
                </S.SearchBar>
            </S.SearchBarWrapper>
            <S.RecruitTop>
                <S.Contents>
                    <h3>
                        서울시 강남구 팀원을 구해요!
                        <img src="../img/req.svg" alt="req title" />
                    </h3>
                </S.Contents>
                <MultiSlide2 margin-right={'30px'}/>
            </S.RecruitTop>
            <S.RecruitBottom>
                <S.Contents>
                    <h3>
                        팀원을 구해요!
                    </h3>
                </S.Contents>
                <MultiSlide2/>
            </S.RecruitBottom>
        </Wrapper>
        
    )
}