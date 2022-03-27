import Blank from "../../../commons/blank/blank";
import useMoveToPage from "../../../commons/hooks/useMoveToPage";
import { v4 as uuidv4 } from "uuid";
import * as S from "./profileEdit.styles";
import dump from "../../../../commons/json/tendency.json";
import { Fragment, useContext } from "react";
import RainbowTag from "../../../commons/tags/commons/rainbowTag";
import { OnBoardingContext } from "../../onboarding/onboarding.container";

export default function ProfileEditUI(){
    const {moveToProfile} = useMoveToPage()
    const {tendency,onClickPushTag } = useContext(OnBoardingContext)

    return(
        <S.Wrapper>
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
            {dump.tendency.name.map((name, index) => (
            <Fragment key={uuidv4()}>
              <RainbowTag
                name={name}
                marginBottom={12}
                backgroundColor={dump.tendency.color[index]}
                onClick={onClickPushTag}
              />
            </Fragment>
          ))}
            </S.TagArea>
        </S.Wrapper>
    )
}