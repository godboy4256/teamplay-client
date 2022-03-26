import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 17px 20px 26px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const BackArrow = styled.div`
  width: 12px;
  height: 16px;

  margin-bottom: 50px;

  img {
    width: 100%;

    :hover {
      cursor: pointer;
    }
  }
`;