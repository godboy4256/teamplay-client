import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import useMoveToPage from "../../../commons/hooks/useMoveToPage";
import CircleTag from "../../../commons/tags/commons/circleTag";
import ClickTag from "../../../commons/tags/commons/clickTag";
import * as S from  "./profileDetail.styles";

export interface IPropsProfileDetail {
    isVisible: string
    onClickProfileDetail: MouseEventHandler<HTMLSpanElement> | undefined;
}

export default function ProfileDetailUI(props: IPropsProfileDetail){
    const router = useRouter()
    const { moveToProfileEdit } = useMoveToPage();

    const onClickMoveToProjectList = () => {
        router.push('/profile/list')
    }
    return(
    <>
        <S.Wrapper>
           <S.WrapperHeader>
               <S.HeaderLine>
                   <img src="/img/commons/leftArrow1.svg"/>
                   <span>상세프로필</span>
                   <img onClick={moveToProfileEdit} src="/img/commons/settingGear.svg"/>
               </S.HeaderLine>
               <S.HeaderContents>
                <S.ImgBox>
                    <img src="/img/임시사진.png" />
                </S.ImgBox>
                <S.InfoBox>
                    <S.Name>
                        <span>제이든</span>
                    </S.Name>
                    <S.Position>
                        <span>iOS 개발자 </span>
                        <img src="/img/location.svg" />
                        <span>경기도 하남</span>
                    </S.Position>
                    <S.Tag>
                        <CircleTag name="꼼꼼한" size={1.1} bgColor="#FBE184" margin={10} />
                        <CircleTag name="냉철한" size={1.1} bgColor="#3D99FF" margin={10} />
                        <CircleTag name="친절한" size={1.1} bgColor="#FBCFCF" margin={10} />
                    </S.Tag>
                </S.InfoBox>
               </S.HeaderContents>
            </S.WrapperHeader>
            <S.LineBox>
                <S.Detail>
                    <span onClick={props.onClickProfileDetail}>About me</span>
                    <span onClick={props.onClickProfileDetail}>Project</span>
                </S.Detail>
            </S.LineBox>
        </S.Wrapper>
        {props.isVisible === "About me" ? 
        <S.AboutMeWrapper>
            <S.Top>
                <S.TopHeader>
                    <span>관심있는 분야</span>
                </S.TopHeader>
                <S.TopTagBox>
                    <ClickTag name="건강/운동" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="금융" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="이커머스" marginBottom={0} isClick={undefined} onClick={undefined}/>
                </S.TopTagBox>
            </S.Top>
            <S.Middle>
                <S.MiddleHeader>
                    <span>사용가능한 툴</span>
                </S.MiddleHeader>
                <S.MiddleTagBox>
                    <ClickTag name="Figma" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="Adobe" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="HTML" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="CSS" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="Miro" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="Python" marginBottom={0} isClick={undefined} onClick={undefined}/>
                </S.MiddleTagBox>
            </S.Middle>
            <S.Bottom>
                <S.BottomHeader>
                    <span>팀 프로젝트 후기</span>
                </S.BottomHeader>
                <S.BottomInnerBox>후기란</S.BottomInnerBox>
            </S.Bottom>
        </S.AboutMeWrapper> 
        : props.isVisible === "Project" && 
        <S.ProjectWrapper>
            <S.Header>
                <img onClick={onClickMoveToProjectList} src="/img/profile/progressDone.svg"/>
            </S.Header>
            <S.ProjectBox>
                <S.ProjectImgItem>
                    <img src="/img/contents01.jpg"/>
                    <img src="/img/contents02.jpg"/>
                    <img src="/img/contents03.jpg"/>
                    <img src="/img/contents04.jpg"/>
                    <img src="/img/contents05.png"/>
                    <img src="/img/contents06.png"/>
                    <img src="/img/contents01.jpg"/>
                    <img src="/img/contents02.jpg"/>
                    <img src="/img/contents03.jpg"/>
                    <img src="/img/contents04.jpg"/>
                    <img src="/img/contents05.png"/>
                    <img src="/img/contents06.png"/>
                    <img src="/img/contents01.jpg"/>
                    <img src="/img/contents02.jpg"/>
                    <img src="/img/contents04.jpg"/>
                    <img src="/img/contents05.png"/>
                </S.ProjectImgItem>    
            </S.ProjectBox>
        </S.ProjectWrapper> 
        }
    </>
    )
}