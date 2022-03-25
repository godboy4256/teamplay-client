import { useContext } from "react";
import { TextArea } from "../../../commons/textarea/textarea";
import { ChattingDetailContext } from "./chattingDetail.container";
import * as T from "./sidebar/sidebar.styles";
import * as S from "./chattingDetail.styles";
import Sidebar from "./sidebar/sidebar";

export default function ChattingDetailUI() {
  const { onClickSetPosition, isToggle } = useContext(ChattingDetailContext);
  return (
    <S.Wrapper>
      <T.Opacity isToggle={isToggle}></T.Opacity>
      <Sidebar />
      <div>
        <S.TitleBox>
          <S.RightBox>
            <S.LeftArrowImg src="/img/commons/leftArrow1.svg" />
            <S.Tag>Project</S.Tag>
            <S.ProjectName>프로젝트 단톡방</S.ProjectName>
            <S.Count>5</S.Count>
          </S.RightBox>
          <S.DotToggleImg
            src="/img/commons/dotToggle.svg"
            onClick={onClickSetPosition}
          />
        </S.TitleBox>
        {/* <S.TitleBox> 1:1
        <S.RightBox>
          <S.LeftArrowImg src="/img/commons/leftArrow1.svg" />
        </S.RightBox>
        <S.ProjectName>프로젝트 단톡방</S.ProjectName>
        <S.DotToggleImg src="/img/commons/dotToggle.svg" />
      </S.TitleBox> */}
        <S.ProfileMsgBox>
          <S.ProfileImg>
            <S.Profile>
              <img src="/img/임시사진.png" />
            </S.Profile>
          </S.ProfileImg>
          <S.MessageBox>
            <S.Name>냥냥</S.Name>
            <S.ReceiveFirstMessage>냥냥냥냥냥</S.ReceiveFirstMessage>
          </S.MessageBox>
          <S.Time>1:12pm</S.Time>
        </S.ProfileMsgBox>
        <S.Alert>냥냥님이 참여하였습니다.</S.Alert>
        <S.ProfileMsgBox>
          <S.ProfileImg>
            <S.Profile>
              <img src="/img/임시사진.png" />
            </S.Profile>
          </S.ProfileImg>
          <S.MessageBox>
            <S.Name>뇽뇽</S.Name>
            <S.ReceiveFirstMessage>
              뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽
            </S.ReceiveFirstMessage>
          </S.MessageBox>
          <S.Time>1:13pm</S.Time>
        </S.ProfileMsgBox>
        <S.ReceiveBox>
          <S.ReceiveMessage>
            뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽뇽
          </S.ReceiveMessage>
          <S.Time>1:12pm</S.Time>
        </S.ReceiveBox>
        <S.SendFirstBox>
          <S.Time>1:13pm</S.Time>
          <S.SendFirstMessage>
            ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
          </S.SendFirstMessage>
        </S.SendFirstBox>
        <S.SendBox>
          <S.Time>1:13pm</S.Time>
          <S.SendMessage>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</S.SendMessage>
        </S.SendBox>
      </div>
      <div>
        <S.FunctionBox>
          <S.InputBox>
            <S.UploadImgBtn>
              <img src="/img/chatting/camera.svg" />
            </S.UploadImgBtn>
            <S.MsgInput>
              <TextArea />
            </S.MsgInput>
          </S.InputBox>
          <S.SendButton>
            <img src="/img/chatting/send.svg" />
          </S.SendButton>
        </S.FunctionBox>
      </div>
    </S.Wrapper>
  );
}
