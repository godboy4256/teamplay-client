import { gql } from "@apollo/client";
export const FETCH_USERS = gql`
  query fetchUsers($page: Float!) {
    fetchUsers(page: $page) {
      id
    }
  }
`;

export const FETCH_PROJECT_ALL = gql`
  query fetchProjectAll {
    fetchProjectAll {
      id
      isStart
      isComplete
    }
  }
`;
