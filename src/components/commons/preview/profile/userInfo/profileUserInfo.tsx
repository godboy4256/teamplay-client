import Tags01 from '../../../tags/commons/tags01'
import * as S from './profileUserInfo.styles'

export default function ProfileUserInfo() {
    return (
        <S.Wrapper>
            <S.ImgBox>
                <img src='/img/임시사진.png'/>
            </S.ImgBox>
            <S.InfoBox>
                <S.Name>
                    <span>제이든</span>
                </S.Name>
                <S.Position>
                    <span>iOS 개발자 </span>
                    <img src='/img/location.svg' />
                    <span>경기도 하남</span>
                </S.Position>
                <S.Tag>
                    <Tags01 name='테스트1'/>
                    <Tags01 name='테스트2'/>
                    <Tags01 name='테스트'/>
                </S.Tag>
            </S.InfoBox>
        </S.Wrapper>
    )
}