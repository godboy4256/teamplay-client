import styled from "@emotion/styled";
import CircleTag from "../tags/commons/circleTag";

interface IPropsInfoBox {
  fontSize: number;
}

export const ProfileBox = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding-top: 28px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeartImg = styled.img`
  width: 12%;
  height: 6.67%;
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const PictureBox = styled.div`
  width: 78%;
  height: 50%;

  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eeecec;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  font-size: ${(props: IPropsInfoBox) => `${props.fontSize}px`};
`;

export const Position = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 1.286em;
  line-height: 21px;
  color: #999999;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 1.714em;
  line-height: 28px;
  color: #4a4a4a;
`;

export const Tags = styled.div`
  display: flex;
  padding: 0px 13px;
  justify-content: space-between;
`;

interface IPropsProfileCard {
  img: string;
  name: string;
  position: string;
  fontSize: number;
}

export default function PropsProfileCard(props: IPropsProfileCard) {
  return (
    <ProfileBox>
      <HeartImg src="/img/commons/heart.svg" />
      <PictureBox>
        <img src={props.img} />
      </PictureBox>
      <InfoBox fontSize={props.fontSize}>
        <Name>{props.name}</Name>
        <Position>{props.position}</Position>
        <Tags>
          <CircleTag name="주도적인" size={1} bgColor="#24BE74" margin={4} />
          <CircleTag name="논리적인" size={1} bgColor="#00623B" margin={4} />
          <CircleTag name="톡톡튀는" size={1} bgColor="#FF5252" margin={4} />
        </Tags>
      </InfoBox>
    </ProfileBox>
  );
}
