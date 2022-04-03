import { gql } from "@apollo/client";

export const FETCH_PROJECT = gql`
  query fetchProject($projectId: String!) {
    fetchProject(projectId: $projectId) {
      id
      name
      teamname
      intro
      recruitDate
      imgUrl
      description
      method
      type {
        name
      }
      location {
        name
      }
      leader {
        name
      }
      isComplete
      isStart
      projectToPositions {
        position {
          name
        }
        number
      }
      users {
        name
      }
    }
  }
`;

export const JOIN_CHATROOM = gql`
  mutation joinChatRoom($projectId: String!) {
    joinChatRoom(projectId: $projectId) {
      id
    }
  }
`;
