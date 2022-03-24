import ClickTag from "../../commons/tags/commons/clickTag";
import ProfileDetail from "./detail/profileDetail.container";
import * as S from  "./profile.styles";

export default function ProfileUI(){

    return(
        <S.Wrapper>
           <S.WrapperHeader>
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
                {/* <S.Tag>
                    <CircleTag name="태그" size={15} color="#CCC" />
                    <CircleTag name="태그" size={15} color="#CCC" />
                    <CircleTag name="태그" size={15} color="#CCC" />
                </S.Tag> */}
                </S.InfoBox>
            </S.WrapperHeader>
            <S.LineBox>
                <S.Detail>
                    <span>About me</span>
                    <span>Project</span>
            </S.Detail>
            </S.LineBox>
            <S.WrapperDetail>
                <ProfileDetail/>
            </S.WrapperDetail>
        </S.Wrapper>
    )
}