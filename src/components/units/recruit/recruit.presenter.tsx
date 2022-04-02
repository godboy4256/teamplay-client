import { Fragment, useContext } from "react";
import dump from "../../../commons/json/tendency.json";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "../../../commons/styles/commonStyls";
import MultiSlide2 from "../../commons/slider/component/multislide/multislide2.container";
import { RecruitContext } from "./recruit.container";
import * as S from "./recruit.styles";
// import FilterTendency from "./sidebar/tendency";
import SideBarBasic from "./sidebar/sidebarBasic";
import PropsProfileCard from "../../commons/profileCard/profileCard";

export default function RecruitUI() {
    const {
        tendency,
        isVisible,
        isSearchBar,
        onClickSearchImg,
        onClickSearchfilter,
        onClickDeleteTendencyTag,
    } = useContext(RecruitContext)

    return(
        <>
        {isVisible && <SideBarBasic/>}
        <S.TopText>
            <span>모든 팀원</span>
        </S.TopText>
        <Wrapper paddingTop={0}>
            <S.Opacity isVisible={isVisible} onClick={onClickSearchfilter}/>
            <div>
                <S.SearchBarWrapper>
                    <S.SearchBar>
                        <img onClick={onClickSearchfilter} src="../img/filter.svg" alt="search bar filter" />
                            <S.TagArea>
                                {tendency?.length ? (
                                    <>
                                        {tendency.map((name) => {
                                            console.log(name);
                                            return (
                                            <S.Tag
                                                bgColor={
                                                dump.tendency.name.indexOf(name) > 0
                                                    ? dump.tendency.color[dump.tendency.name.indexOf(name)]
                                                    : "#0D223A"
                                                }
                                                key={uuidv4()}
                                                onClick={
                                                onClickDeleteTendencyTag && onClickDeleteTendencyTag(name)
                                                }
                                            >
                                                <span>{name}</span>
                                                <div>x</div>
                                            </S.Tag>
                                            );
                                        })}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                            </S.TagArea>
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
                    <S.MultiSlide2>
                        <MultiSlide2/>
                    </S.MultiSlide2>
                    <S.WebSlideList>
                        {new Array(10).fill(1).map((_) => {
                            return (
                                <> 
                                    <PropsProfileCard key={uuidv4()} img={"../img/onboarding/userProfile.png"} name={"쇼바스키"} position={"개발자"} tendency={undefined} fontSize={14}/>
                                    <PropsProfileCard key={uuidv4()} img={"../img/user01.png"} name={"스바스키"} position={"기획자"} tendency={tendency} fontSize={14}/>
                                </>
                            )
                        })}
                    </S.WebSlideList>
                </S.RecruitTop>
                <S.RecruitBottom>
                    <S.Contents>
                        <h3>
                            팀원을 구해요!
                        </h3>
                    </S.Contents>
                    <S.MultiSlide2>
                        <MultiSlide2/>
                    </S.MultiSlide2>
                </S.RecruitBottom>
            </div>
        </Wrapper>
        </>
    )
}