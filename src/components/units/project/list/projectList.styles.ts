import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";

export const ProjectListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${breakPoints.tablet} {
    justify-content: space-between;
  }
  padding-bottom: 300px;
  & > div {
    @media (min-width: 1200px) {
      width: 25%;
      padding: 5px 10px;
      & > div {
        border-radius: 12px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
      }
    }
    @media ${breakPoints.tablet} {
      width: 49%;
    }
  }
`;

export const ProjectListTitle = styled.h4`
  display: none;
  font-size: 28px;
  padding: 50px 0 20px;
  @media ${breakPoints.web} {
    display: block;
  }
`;
