import { gql } from "@apollo/client";

export const FETCH_CHATS = gql`
  query fetchChats($chatRoomId: String!, $page: Float!) {
    fetchChats(chatRoomId: $chatRoomId, page: $page) {
      id
      content
      createdAt
      user {
        name
      }
    }
  }
`;

export const SEND_MESAGE = gql`
  mutation sendMessage($message: String!, $chatRoomId: String!) {
    sendMessage(message: $message, chatRoomId: $chatRoomId)
  }
`;

export const FETCH_CHAT_ROOM_MEMBERS = gql`
  query fetchChatRoomMembers($chatRoomId: String!) {
    fetchChatRoomMembers(chatRoomId: $chatRoomId) {
      user {
        name
      }
    }
  }
`;
