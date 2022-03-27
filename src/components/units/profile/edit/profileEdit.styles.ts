import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 17px 20px 26px 20px;
`
export const HeaderLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  img {
    height: 16px;
    :hover {
      cursor: pointer;
    }
  }

  span {
    font-size: 20px;
  }

  div{}
`;

export const ImgBox = styled.div`
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 85%;
    height: 80%;
    border-radius: 50%;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Name = styled.div`
  span{
    font-size: 24px;
  }
`
export const Tendency = styled.div`
  span{
    font-size: 16px;
  }
`
export const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`