import { useContext } from "react";
import { TextArea } from "../../../commons/textarea/textarea";
import { ChattingDetailContext } from "./chattingDetail.container";
import * as S from "./chattingDetail.styles";
import Sidebar from "./sidebar/sidebar.container";
import { ChattingContext } from "../chatting.container";
import { IPropsChattingDetailUI } from "./chattingDetail.types";
import { v4 as uuidv4 } from "uuid";
import useFetchUser from "../../../commons/hooks/useFetchUser";
import { getTime } from "../../../../commons/library/getTime";

export default function ChattingDetailUI(props: IPropsChattingDetailUI) {
  const {
    isToggle,
    message,
    onClickSetPosition,
    onChangeChatInput,
    onClickSendMessage,
  } = useContext(ChattingDetailContext);
  const { data: loginInfo } = useFetchUser();
  const { onClickChangePosition } = useContext(ChattingContext);

  return (
    <S.Wrapper ref={props.wrapperRef}>
      <S.Opacity isToggle={isToggle} onClick={onClickSetPosition} />
      <Sidebar />
      <S.ChattingBox>
        <S.TitleBox>
          <S.RightBox>
            <S.LeftArrowImg
              src="/img/commons/leftArrow1.svg"
              onClick={onClickChangePosition}
            />
            <S.Tag>Project</S.Tag>
            <S.ProjectName>{props.roomName}</S.ProjectName>
            <S.Count>5</S.Count>
          </S.RightBox>
          <S.DotImgBox onClick={onClickSetPosition}>
            <S.DotToggleImg src="/img/commons/dotToggle.svg" />
          </S.DotImgBox>
        </S.TitleBox>
        <S.ChattingContainer ref={props.chattingRef}>
          <S.ChattingList ref={props.ChattingBoxRef} className="chatting-list">
            {props.chatsArr?.map((el, idx) =>
              el.user.name === loginInfo?.fetchUser.name ? (
                <li className="sent" key={uuidv4()}>
                  <span className="message">{el.content}</span>
                  <span className="time">{getTime(el.createdAt)}</span>
                </li>
              ) : (
                <>
                  {idx === 0 && (
                    <li className="received" key={uuidv4()}>
                      <span className="profile">
                        <img
                          className="image"
                          src="https://placeimg.com/50/50/any"
                          alt="any"
                        />
                        <span className="user">
                          <span className="name">{el.user.name}</span>
                          <span className="message-box">
                            <span className="message">{el.content}</span>
                            <span className="time">
                              {getTime(el.createdAt)}
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                  )}
                  {idx !== 0 &&
                  props.chatsArr[idx - 1].user.name === el.user.name ? (
                    <li className="received">
                      <span className="continue-message">{el.content}</span>
                      <span className="time">{getTime(el.createdAt)}</span>
                    </li>
                  ) : (
                    <li className="received" key={uuidv4()}>
                      <span className="profile">
                        <img
                          className="image"
                          src="https://placeimg.com/50/50/any"
                          alt="any"
                        />
                        <span className="user">
                          <span className="name">{el.user.name}</span>
                          <span className="message-box">
                            <span className="message">{el.content}</span>
                            <span className="time">
                              {getTime(el.createdAt)}
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                  )}
                </>
              )
            )}
          </S.ChattingList>
        </S.ChattingContainer>
        <S.FunctionWrapper>
          <S.FunctionBox>
            <S.InputBox>
              <S.UploadImgBtn>
                <img src="/img/chatting/camera.svg" />
              </S.UploadImgBtn>
              <S.MsgInput>
                <TextArea
                  wrapperRef={props.wrapperRef}
                  value={message}
                  onChange={onChangeChatInput}
                  onkeydown={props.onkeyPressEnter}
                />
              </S.MsgInput>
            </S.InputBox>
            <S.SendButton onClick={onClickSendMessage} ref={props.sendRef}>
              <img src="/img/chatting/send.svg" />
            </S.SendButton>
          </S.FunctionBox>
        </S.FunctionWrapper>
      </S.ChattingBox>
    </S.Wrapper>
  );
}
