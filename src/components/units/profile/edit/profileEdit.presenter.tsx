import Blank from "../../../commons/blank/blank";
import useMoveToPage from "../../../commons/hooks/useMoveToPage";
import { v4 as uuidv4 } from "uuid";
import * as S from "./profileEdit.styles";
import { Fragment, useContext } from "react";
import RainbowTag from "../../../commons/tags/commons/rainbowTag";
import { ProfileEditContext } from "./profileEdit.container";
import dump from "../../../../commons/json/tendency.json";
import SubmitBtn from "../../../commons/button/Submit";
import ProfileEditTendency from "./sidebar/tendency";

export default function ProfileEditUI(){
    const {moveToProfile} = useMoveToPage()
    const { 
        isVisible,
        isVisibleTwo,
        isVisibleThree,
        isVisibleFour,
        tagInputRef, 
        onClickPushTag, 
        onClickEditTendency,
        onClickEditPosition,
        onClickEditInterest,
        onClickEditTechnic,
        onClickBasicInfoEdit
    } = useContext(ProfileEditContext)

    return(
        <S.Wrapper>
            <div>
                <S.HeaderLine>
                    <img onClick={moveToProfile} src="/img/commons/leftArrow1.svg"/>
                    <span>나의 프로필 수정</span>
                    <div></div>
                </S.HeaderLine>
                <S.ImgBox>
                    <img src="/img/profile/imgUploadCamera.svg"/>
                </S.ImgBox>
                <Blank height={16} width={0}/>
                <S.Name>
                    <span>제이든 님</span>
                </S.Name>
                <Blank height={32} width={0}/>
                <S.Tendency>
                    <span>나의 성향</span>
                </S.Tendency>
                <Blank height={12} width={0}/>
                <S.TagArea>
                    <RainbowTag name="주도적인" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} />
                    <RainbowTag name="논리적인" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined}/>
                    <RainbowTag name="톡톡튀는" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined}/>
                    <ProfileEditTendency/>
                    <S.EditTag onClick={onClickEditTendency}>+</S.EditTag>
                </S.TagArea>
                <Blank height={24} width={0}/>
                <S.Position>
                    <span>나의 포지션</span>
                </S.Position>
                <Blank height={12} width={0}/>
                <S.TagArea>
                    <RainbowTag name="개발자" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} />
                    {isVisibleTwo ? (
                        <input
                            ref={tagInputRef}
                            type="text"
                            placeholder="수정"
                        />
                    ) : (
                        <S.EditTag onClick={onClickEditPosition}>+</S.EditTag>
                    )}
                </S.TagArea>
                <Blank height={24} width={0}/>
                <S.Interest>
                    <span>관심있는 분야</span>
                </S.Interest>
                <Blank height={12} width={0}/>
                <S.TagArea>
                    <RainbowTag name="공유서비스" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} />
                    <RainbowTag name="소셜네트워크" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} />
                    {isVisibleThree ? (
                        <input
                            ref={tagInputRef}
                            type="text"
                            placeholder="수정"
                        />
                    ) : (
                        <S.EditTag onClick={onClickEditInterest}>+</S.EditTag>
                    )}
                </S.TagArea>
                <Blank height={24} width={0}/>
                <S.Technic>
                    <span>사용 가능한 기술/언어</span>
                </S.Technic>
                <Blank height={12} width={0}/>
                <S.TagArea>
                    <RainbowTag name="javascript" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} />
                    <RainbowTag name="CSS" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} />
                    {isVisibleFour ? (
                        <input
                            ref={tagInputRef}
                            type="text"
                            placeholder="수정"
                        />
                    ) : (
                        <S.EditTag onClick={onClickEditTechnic}>+</S.EditTag>
                    )}
                </S.TagArea>
            </div>
                <S.BtnBox>
                    <SubmitBtn
                        name="프로필 수정하기" 
                        fontSize={1.143} 
                        backgroundcolor="#3894FF" 
                        onClick={undefined}                
                    />
                    <Blank height={12} width={0}/>
                    <S.InfoEdit>
                        <span onClick={onClickBasicInfoEdit}>기본정보 수정하기</span>
                    </S.InfoEdit>
                </S.BtnBox>
        </S.Wrapper>
    )
}
