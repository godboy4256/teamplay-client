import { memo, MouseEvent } from "react";
import CircleTag from "../../../commons/tags/commons/circleTag";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import SquareTag from "../../../commons/tags/commons/squareTag";
import { breakPoints } from "../../../../commons/styles/breakpoint";

const ProjectListItem = styled.div`
  width: 100%;
  cursor: pointer;
  & > div {
    border-radius: 12px;
    margin-bottom: 25px;
    overflow: hidden;
    border: 1px solid #ccc;
    transition: 0.4s ease-in-out;
    &:hover {
      border-color: #3894ff;
      transform: scale(1.01);
    }
  }
  @media (min-width: 1200px) {
    width: 25%;
    padding: 5px 10px;
    & > div {
      border-radius: 12px;
      margin-bottom: 25px;
      overflow: hidden;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #ccc;
    }
  }
  @media ${breakPoints.tablet} {
    width: 49%;
  }
`;

const ProjectListItemTop = styled.div`
  width: 100%;
  height: 2vw;
  padding: 15px 13px 100px;
  color: #fff;
  position: relative;
  overflow: hidden;

  & > img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > div {
    padding: 15px 13px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  @media ${breakPoints.web} {
    height: 1.765rem;
  }
`;

const ProjectListItemBottom = styled.div`
  padding: 15px 13px;
  & > h3 {
    padding-bottom: 7px;
  }
`;

const ProjectMembers = styled.div`
  margin-top: 7px;
  display: flex;
  align-items: center;
  font-size: 13px;
`;

interface IPropsProjectCard {
  id?: string;
  imgUrl?: string;
  name?: string | undefined;
  recruitDate?: string | undefined;
  onDetail: (e: MouseEvent<HTMLDivElement>) => void;
}

const ProjectCard = memo((props: IPropsProjectCard) => {
  const xmasDay: Date | null = props.recruitDate
    ? new Date(props.recruitDate)
    : null;
  const now: Date | null = new Date();
  const gap = Number(xmasDay) - Number(now);
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));

  return (
    <ProjectListItem id={props.id} onClick={props.onDetail}>
      <div>
        <ProjectListItemTop>
          <div>
            <SquareTag
              bgColor={day <= 0 ? "#ccc" : "#3894FF"}
              size={1}
              name={day <= 0 ? "마감" : `D-${day}`}
            />
            {/* <img src="../img/like.svg" alt="like icon" /> */}
          </div>
          {props.imgUrl &&
          !props.imgUrl.includes("cdn-cashy-static-assets.lucidchart.com/") ? (
            <img
              src={`https://storage.googleapis.com/${props.imgUrl}`}
              alt={props.name}
            />
          ) : (
            <img src={props.imgUrl} />
          )}
        </ProjectListItemTop>
        <ProjectListItemBottom>
          <h3>{props.name}</h3>
          <CircleTag
            key={uuidv4()}
            size={0.571}
            name={"기타"}
            bgColor="#C4C4C4"
            margin={0}
          />
          <ProjectMembers>
            <img src="../img/big_member.svg" alt="members icon" />
            <span>1/3</span>
          </ProjectMembers>
        </ProjectListItemBottom>
      </div>
    </ProjectListItem>
  );
});

export default ProjectCard;
