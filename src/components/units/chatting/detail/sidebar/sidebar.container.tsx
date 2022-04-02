import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_CHAT_ROOM_MEMBERS,
  START_PROJECT,
} from "../chattingDetail.queries";
import {
  IChatRoomMember,
  IMutation,
  IMutationStartProjectArgs,
  IQuery,
  IQueryFetchChatRoomMembersArgs,
} from "../../../../../commons/types/generated/types";
import { ChattingContext } from "../../chatting.container";
import SidebarUI from "./sidebar.presenter";
import { RoomListContext } from "../../../../../../pages/chatting";

export default function Sidebar() {
  const { data: roomList } = useContext(RoomListContext);
  const { chatRoomId } = useContext(ChattingContext);
  const [checkList, setCheckList] = useState<IChatRoomMember[]>([]);
  const [isCheck, setIsCheck] = useState<string[]>([]);
  const [price, setPrice] = useState<number | string>(10000);
  const [isSelf, setIsSelf] = useState(false);
  const [isChoose, setIsChoose] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [startProject] = useMutation<
    Pick<IMutation, "startProject">,
    IMutationStartProjectArgs
  >(START_PROJECT);
  const { data } = useQuery<
    Pick<IQuery, "fetchChatRoomMembers">,
    IQueryFetchChatRoomMembersArgs
  >(FETCH_CHAT_ROOM_MEMBERS, {
    variables: {
      chatRoomId: chatRoomId || "",
    },
  });

  useEffect(() => {
    if (typeof price !== "number" || !isCheck.length) setIsSubmit(false);
    else setIsSubmit(true);
  }, [price, isCheck]);

  const onClickProjectSetting = () => {
    setIsChoose((prev) => !prev);
  };

  const onChangeCheckedUser = (data: IChatRoomMember) => () => {
    if (isCheck.includes(data.user.name)) {
      const index = isCheck.indexOf(data.user.name);
      const tempIsCheck = isCheck.filter((el) => {
        return data.user.name !== el;
      });
      const tempCheckList = checkList;
      tempCheckList.splice(index, 1);

      setCheckList([...tempCheckList]);
      setIsCheck([...tempIsCheck]);
    } else {
      setCheckList((prev) => [...prev, data]);
      setIsCheck((prev) => [...prev, data.user.name]);
    }
  };

  const onChangeSelectPrice = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "직접입력") {
      setIsSelf(true);
      return;
    }

    setPrice(Number(e.target.value));
    setIsSelf(false);
  };

  const onChangeInputPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const onClickStartProject = async () => {
    const userIds: string[] = [];
    let projectId = "";
    roomList?.fetchChatRooms.forEach((data) => {
      if (data.id === chatRoomId) projectId = data.project.id;
    });
    checkList.forEach((data) => {
      userIds.push(data.user.id);
    });

    try {
      const reulst = await startProject({
        variables: {
          userIds,
          point: Number(price),
          projectId,
        },
      });
      console.log(reulst);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <SidebarUI
      data={data}
      checkList={checkList}
      price={price}
      isCheck={isCheck}
      isSelf={isSelf}
      isChoose={isChoose}
      isSubmit={isSubmit}
      onClickStartProject={onClickStartProject}
      onChangeInputPrice={onChangeInputPrice}
      onChangeSelectPrice={onChangeSelectPrice}
      onClickProjectSetting={onClickProjectSetting}
      onChangeCheckedUser={onChangeCheckedUser}
    />
  );
}
