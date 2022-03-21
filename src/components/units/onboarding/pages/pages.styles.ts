import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 17px 20px 26px 20px;
`;

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

export const Title = styled.div`
  margin-bottom: 12px;

  font-weight: 400;
  font-size: 18px;
  color: #bababa;
`;

export const Subscript = styled.div`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 12px;
  color: #bababa;
`;

export const Notice = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #989898;
`;

export const Looking = styled.div`
  display: flex;
  justify-content: center;

  font-weight: 400;
  font-size: 14px;
  color: #d2d2d2;
`;

export const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AddTag = styled.div`
  display: inline-block;
  padding: 10px 15px;
  border: 1px dashed #eaeaea;
  border-radius: 20px;

  font-weight: 400;
  font-size: 14px;
  color: #eaeaea;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PictureBox = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px 12px 0px 0px;
  padding: 20px 50px;
  background-color: #c4c4c4;

  img {
    width: 195px;
    height: 195px;

    border-radius: 50%;
  }
`;

export const InfoBox = styled.div`
  width: 250px;
  padding: 20px 50px;
  background-color: #eaeaea;
  border-radius: 0px 0px 12px 12px;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 7px;
  font-weight: 400;
  font-size: 24px;
  color: #9d9d9d;
`;

export const Position = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  color: #9d9d9d;
`;

export const Tags = styled.div``;
