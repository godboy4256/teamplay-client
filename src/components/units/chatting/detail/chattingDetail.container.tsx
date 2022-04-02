import { useMutation, useQuery } from "@apollo/client";
import {
  ChangeEvent,
  createContext,
  KeyboardEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import io from "socket.io-client";
import { RoomListContext } from "../../../../../pages/chatting";
import {
  IMutation,
  IMutationSendMessageArgs,
  IQuery,
  IQueryFetchChatsArgs,
} from "../../../../commons/types/generated/types";
import useFetchUser from "../../../commons/hooks/useFetchUser";
import { ChattingContext } from "../chatting.container";
import ChattingDetailUI from "./chattingDetail.presenter";
import { FETCH_CHATS, SEND_MESAGE } from "./chattingDetail.queries";
import { IChattingDetailContext, IMessageData } from "./chattingDetail.types";

const url = "https://backend.ljh305.shop";

export const ChattingDetailContext = createContext<IChattingDetailContext>({});

export default function ChattingDetail() {
  const { chatRoomId } = useContext(ChattingContext);
  const [position, setPosition] = useState(-262.5);
  const [isToggle, setIsToggle] = useState(false);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [roomName, setRoomName] = useState("");
  const ChattingBoxRef = useRef<HTMLUListElement>(null);
  const sendRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { data: userInfo } = useFetchUser();
  const { data: roomList } = useContext(RoomListContext);

  const [sendMessage] = useMutation<
    Pick<IMutation, "sendMessage">,
    IMutationSendMessageArgs
  >(SEND_MESAGE);
  const { data } = useQuery<Pick<IQuery, "fetchChats">, IQueryFetchChatsArgs>(
    FETCH_CHATS,
    {
      variables: {
        chatRoomId: chatRoomId || "",
        page: 1,
      },
    }
  );

  useEffect(() => {
    if (!roomList) return;

    roomList.fetchChatRooms.forEach((el) => {
      if (el.id === chatRoomId) setRoomName(el.name);
    });

    wrapperRef.current?.scrollTo(0, wrapperRef.current.scrollHeight);
  }, [roomList, chatRoomId]);

  let socket: any;

  useEffect(() => {
    if (!chatRoomId) return;

    socket = io(url);

    // message;
    socket.on("message" + chatRoomId, (data: IMessageData) => {
      makeLi(data);
      wrapperRef.current?.scrollTo(0, wrapperRef.current.scrollHeight);
    });

    /* 누군가 입장 */
    // socket.on("join" + chatRoomId, (comeOn) => {
    //   console.log("fdsa");
    //   const div = document.createElement("div");
    //   const ref = ChattingBoxRef.current;
    //   const dom = `<S.Alert>${comeOn}님이 참여하였습니다.</S.Alert>`;

    //   div.innerHTML = dom;
    //   ref?.appendChild(div);
    // });

    return () => {
      socket.disconnect();
    };
  }, [chatRoomId]);

  const makeLi = (data: IMessageData) => {
    let dom;
    const li = document.createElement("li");

    if (data.user.name === userInfo?.fetchUser.name) {
      li.className = "sent";
      dom = `<span class="message">${data.content}</span>
      <span class="time">${data.createdAt}</span>`;
    } else {
      li.className = "received";

      if (data.user.name === userName) {
        dom = `<span class="continue-message">${data.content}</span>
        <span class="time">${data.createdAt}</span>`;
      } else {
        setUserName(data.user.name);
        dom = `<span class="profile">
        <img
          class="image"
          src="https://placeimg.com/50/50/any"
          alt="any"
        />
        <span class="user">
          <span class="name">${data.user.name}</span>
          <span class="message-box">
            <span class="message">
              ${data.content}
            </span>
            <span class="time">${data.createdAt}</span>
          </span>
        </span>
      </span>`;
      }
    }

    li.innerHTML = dom;
    ChattingBoxRef.current?.appendChild(li);
  };

  const onChangeChatInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onClickSendMessage = async () => {
    await sendMessage({
      variables: {
        message,
        chatRoomId: chatRoomId || "",
      },
    });
    setMessage("");
  };

  const onkeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter")
      if (!e.shiftKey) {
        e.preventDefault();
        sendRef.current?.click();
      }
  };

  const onClickSetPosition = () => {
    if (position === -262.5) {
      setPosition(0);
      setIsToggle(true);
    } else {
      setPosition(-262.5);
      setIsToggle(false);
    }
  };

  const value = {
    isToggle,
    position,
    data,
    message,
    userName,
    setUserName,
    onClickSetPosition,
    onChangeChatInput,
    onClickSendMessage,
  };
  return (
    <ChattingDetailContext.Provider value={value}>
      <ChattingDetailUI
        ChattingBoxRef={ChattingBoxRef}
        sendRef={sendRef}
        wrapperRef={wrapperRef}
        roomName={roomName}
        onkeyPressEnter={onkeyPressEnter}
      />
    </ChattingDetailContext.Provider>
  );
}
