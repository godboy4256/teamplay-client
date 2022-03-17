import SquareTag from '../../tags/commons/squareTag'
import { IPropsPreviewProjectUI } from './previewProject.queries'
import * as S from './previewProject.styles'
import {v4 as uuidv4} from 'uuid'
import CircleTag from '../../tags/commons/circleTag'
import SubmitButton from '../../inputs/component/submitbutton/submit.container'

export default function PreviewProjectUI(props: IPropsPreviewProjectUI) {
    return (
        <S.Wrapper>
            <S.Modal>
                <S.ImgBox>
                    <S.Img src='/img/preview/ProjectDetail.png' />
                    <img src='/img/preview/Xmark.svg' className='Xmark'/>
                </S.ImgBox>
                <S.TitleBox>
                    <div>
                        <S.Dday>
                            <span>D-4</span>
                        </S.Dday>
                        <S.Func>
                            <img src='/img/preview/Heart.svg' />
                        </S.Func>
                    </div>
                    <S.Title>
                        <span>자율주행자동차 어플</span>
                    </S.Title>
                    <S.Remarks>
                        <span>long established fact</span>
                    </S.Remarks>
                    <S.TagBox>
                        <SquareTag name="모빌리티" size={12}/>
                        <SquareTag name="자율주행" size={12}/>
                    </S.TagBox>
                </S.TitleBox>
                <S.ProjectInfoBox>
                    {props.ProjectInfoList.map((el) => (
                        <S.InfoBox key={uuidv4()}>
                            <S.InfoName>{el.name}</S.InfoName>
                            <S.InfoContents>{el.value}</S.InfoContents>
                        </S.InfoBox>
                    ))}
                </S.ProjectInfoBox>
                <S.TeamInfoBox>
                    <S.InfoName>2명 구인 중</S.InfoName>
                    <S.WantedBox>
                        <S.ProfileBox>
                            <CircleTag size={12} name="디자인" color="#a3a3a3"/>
                            <S.ProfileInfo>
                                <S.UserInfo>
                                    <S.UserPosition>UXUI디자이너</S.UserPosition>
                                    <S.UserCount>1명 모집중</S.UserCount>
                                </S.UserInfo>
                                <S.UserImg>
                                    <img src='/img/preview/user1.png' />
                                </S.UserImg>
                            </S.ProfileInfo>
                        </S.ProfileBox>
                        <S.ProfileBox>
                            <CircleTag size={12} name="디자인" color="#a3a3a3"/>
                            <S.ProfileInfo>
                                <S.UserInfo>
                                    <S.UserPosition>ios 개발자</S.UserPosition>
                                    <S.UserCount>1명 모집중</S.UserCount>
                                </S.UserInfo>
                                <S.UserImg>
                                    <img src='/img/preview/user2.png' />
                                </S.UserImg>
                            </S.ProfileInfo>
                        </S.ProfileBox>
                    </S.WantedBox>
                </S.TeamInfoBox>
                <S.ButtonBox>
                    <S.DetailBtn>상세 설명</S.DetailBtn>
                    <S.QnABtn>Q&A</S.QnABtn>
                </S.ButtonBox>
                <S.SubmitBox>
                    <SubmitButton btnvalue="팀플 참여하기"/>
                </S.SubmitBox>
            </S.Modal>
        </S.Wrapper>
    )
}