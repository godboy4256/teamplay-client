import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      onboarding
    }
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      name
      point
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;
