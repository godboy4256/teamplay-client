import { gql } from "@apollo/client";

export const FETCH_PROJECTS = gql`
  query fetchProjects($page: Float!) {
    fetchProjects(page: $page) {
      id
      name
      imgUrl
      recruitDate
      isStart
      type {
        name
      }
      projectToPositions {
        id
        position {
          name
          id
        }
        number
      }
      projectMembers {
        id
      }
    }
  }
`;

export const FETCH_PROJECT_COUNTS = gql`
  query fetchProjectCounts {
    fetchProjectCounts
  }
`;
