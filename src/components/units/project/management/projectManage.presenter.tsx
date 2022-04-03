import { MouseEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "../../../../commons/styles/commonStyls";
import MultiSlide2 from "../../../commons/slider/component/multislide/multislide2.container";
import * as S from "./projectManage.styles";
import ProjectTeamBoard from "./teamBoard/projectTeamBoard.container";
import TodoAdd from "./todo-add/todoAdd.container";
import TodoDone from "./todo-done/todoDone.container";
import TodoProgress from "./todo-progress/todoProgress.container";
import SquareTag from "../../../commons/tags/commons/squareTag";
import { MainBox } from "../../main/main.styles";
import BoardAdd from "./boardAdd/BoardAdd";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProjectArgs,
} from "../../../../commons/types/generated/types";

interface IProsManage {
  onClickonAdd: ((e: MouseEvent<HTMLButtonElement>) => void) | undefined;
  project?: string;
}

const FETCH_PROJECT = gql`
  query fetchProject($projectId: String!) {
    fetchProject(projectId: $projectId) {
      id
      name
      intro
      method
      teamname
      imgUrl
      recruitDate
      description
      type {
        name
      }
    }
  }
`;

export default function ProjectManageUI(props: IProsManage) {
  const { data } = useQuery<
    Pick<IQuery, "fetchProject">,
    IQueryFetchProjectArgs
  >(FETCH_PROJECT, {
    variables: {
      projectId: props.project || "",
    },
  });
  const [toDoTab, setToDoTab] = useState("To do");
  const onClickChangeTab = () => {
    setToDoTab((prev) => (prev === "To do" ? "Done" : "To do"));
  };

  return (
    <S.ProjectManageStyle>
      <S.ProjectImgBox>
        {data?.fetchProject.imgUrl ? (
          data?.fetchProject.imgUrl.includes(
            "cdn-cashy-static-assets.lucidchart.com/"
          ) ? (
            <S.ProjectManageImg src={data?.fetchProject.imgUrl} />
          ) : (
            <S.ProjectManageImg
              src={`https://storage.googleapis.com/${data?.fetchProject.imgUrl}`}
            />
          )
        ) : (
          <div></div>
        )}
      </S.ProjectImgBox>
      <S.ProjectManageTop>
        <div>
          <Wrapper paddingTop="30px">
            <div>
              <h3>{data?.fetchProject.name}</h3>
              <h4>{data?.fetchProject.description}</h4>
              <SquareTag
                name={data?.fetchProject.type.name}
                size={0.525}
                bgColor="#C4C4C4"
              />
            </div>
            <S.ProjectListInfo>
              <li>
                <S.ProjectInfoKey>팀</S.ProjectInfoKey>
                <S.ProjectInfoValue>
                  {data?.fetchProject.teamname}
                </S.ProjectInfoValue>
              </li>
              <li>
                <S.ProjectInfoKey>밋업 장소</S.ProjectInfoKey>
                <S.ProjectInfoValue>코드 캠프 패스트파이브</S.ProjectInfoValue>
              </li>
              <li>
                <S.ProjectInfoKey>진행 방식</S.ProjectInfoKey>
                <S.ProjectInfoValue>
                  {data?.fetchProject.method === "UNTACT" && "비대면"}
                  {data?.fetchProject.method === "MEET" && "대면"}
                  {data?.fetchProject.method === "MEDIATE" && "조정 가능"}
                </S.ProjectInfoValue>
              </li>
              <li>
                <S.ProjectInfoKey>진행 단계</S.ProjectInfoKey>
                <S.ProjectInfoValue>
                  <S.ProjectStatusBox>
                    <S.ProjectStatus>23%</S.ProjectStatus>
                  </S.ProjectStatusBox>
                </S.ProjectInfoValue>
              </li>
            </S.ProjectListInfo>
          </Wrapper>
        </div>
      </S.ProjectManageTop>
      <MainBox>
        <Wrapper paddingTop="0">
          <S.ProjectResponsiveWeb>
            <div>
              <S.ProjectManageContentsTop>
                <h3>팀 프로필</h3>
              </S.ProjectManageContentsTop>
              <S.ProjectUserSlideBox>
                <MultiSlide2 slideToShow={3} />
              </S.ProjectUserSlideBox>
            </div>
            <div>
              <S.ProjectManageContentsTop>
                <h3>팀 게시판</h3>
                <button id="board" onClick={props.onClickonAdd}>
                  <img src="/img/plusicon.svg" alt="contents plus icon" />
                </button>
              </S.ProjectManageContentsTop>
              <S.ProjectManaBoard>
                {new Array(4).fill(1).map((_) => {
                  return <ProjectTeamBoard key={uuidv4()} />;
                })}
              </S.ProjectManaBoard>
            </div>
          </S.ProjectResponsiveWeb>
          <S.ResponsiveMobleTodoList>
            <S.ProjectManageContentsTop>
              <h3>To Do List</h3>
              <button id="todos" onClick={props.onClickonAdd}>
                <img src="/img/plusicon.svg" alt="contents plus icon" />
              </button>
            </S.ProjectManageContentsTop>
            <S.ProjectTodoNavTab>
              <li onClick={onClickChangeTab}>해야 하는 업무</li>
              <li onClick={onClickChangeTab}>완료한 업무</li>
            </S.ProjectTodoNavTab>
            {toDoTab === "To do" ? <TodoProgress /> : <TodoDone />}
          </S.ResponsiveMobleTodoList>

          <S.ResponsiveWebTodoList>
            <S.ProjectManageContentsTop>
              <h3>To Do List</h3>
              <button id="todos" onClick={props.onClickonAdd}>
                <img src="/img/plusicon.svg" alt="contents plus icon" />
              </button>
            </S.ProjectManageContentsTop>
            <S.ProjectTodoNavTab>
              <li onClick={onClickChangeTab}>
                <h3>해야 하는 업무</h3>
                <TodoProgress />
              </li>
              <li onClick={onClickChangeTab}>
                <h3>완료한 업무</h3>
                <TodoDone />
              </li>
            </S.ProjectTodoNavTab>
          </S.ResponsiveWebTodoList>
        </Wrapper>
      </MainBox>
      <TodoAdd />
      <BoardAdd />
    </S.ProjectManageStyle>
  );
}
