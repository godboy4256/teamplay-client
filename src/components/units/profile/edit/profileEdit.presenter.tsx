import useMoveToPage from "../../../commons/hooks/useMoveToPage";
import * as S from "./profileEdit.styles";

export default function ProfileEditUI(){
    const {moveToProfile} = useMoveToPage()

    return(
        <S.Wrapper>
            <div>
                <S.BackArrow onClick={moveToProfile}>
                    <img src="/img/commons/leftArrow1.svg" />
                </S.BackArrow>
            </div>
        </S.Wrapper>
    )
}