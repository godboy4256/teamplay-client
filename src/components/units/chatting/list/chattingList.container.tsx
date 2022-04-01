import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import ChattingListUI from "./chattingList.presenter";
import { FETCH_CHAT_ROOMS } from "./chattingList.queries";

export default function ChattingList() {
  const { data } = useQuery<Pick<IQuery, "fetchChatRooms">>(FETCH_CHAT_ROOMS);

  return <ChattingListUI data={data?.fetchChatRooms} />;
}
