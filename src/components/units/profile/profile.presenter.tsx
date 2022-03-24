import { MouseEventHandler } from "react";
import CircleTag from "../../commons/tags/commons/circleTag";
import * as S from  "./profile.styles";

export default function ProfileUI(props: { onClickProfileDetail: MouseEventHandler<HTMLSpanElement> | undefined; }){

    return(
        <S.Wrapper>
           <S.WrapperHeader>
               <S.HeaderLine>
                   <img src="/img/commons/leftArrow1.svg"/>
                   <span>상세프로필</span>
                   <img src="/img/commons/settingGear.svg"/>
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
            <S.WrapperDetail>
                {/* <ProfileDetail/> */}
            </S.WrapperDetail>
        </S.Wrapper>
    )
}