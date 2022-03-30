import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";

export const ProjectListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${breakPoints.tablet} {
    justify-content: space-between;
  }
  padding-bottom: 300px;
`;

export const ProjectListTitle = styled.h4`
  display: none;
  font-size: 28px;
  padding: 50px 0 20px;
  @media ${breakPoints.web} {
    display: block;
  }
`;
