import { gql } from "@apollo/client";

export const CREATE_QNA = gql`
  mutation createQna(
    $projectId: String!
    $title: String!
    $content: String!
    $qnaType: QNA_TYPE_ENUM!
  ) {
    createQna(
      projectId: $projectId
      title: $title
      content: $content
      qnaType: $qnaType
    ) {
      id
      title
      content
      qnaType
    }
  }
`;

export const UPDATE_QNA = gql`
  mutation updateQna($qnaId: String!, $title: String!, $content: String!) {
    updateQna(qnaId: $qnaId, title: $title, content: $content) {
      id
    }
  }
`;

export const DELETE_QNA = gql`
  mutation deleteQna($qnaId: String!) {
    deleteQna(qnaId: $qnaId)
  }
`;

export const FETCH_QNAS = gql`
  query fetchQnas($projectId: String!) {
    fetchQnas(projectId: $projectId) {
      id
      title
      qnaType
      content
      user {
        name
        imgUrl
        id
      }
    }
  }
`;
