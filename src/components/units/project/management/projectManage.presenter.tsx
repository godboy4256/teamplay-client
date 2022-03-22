import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "../../../../commons/styles/commonStyls";
import MultiSlide2 from "../../../commons/slider/component/multislide/multislide2.container";
import CircleTag from "../../../commons/tags/commons/circleTag";
import * as S from "./projectManage.styles";
import ProjectTeamBoard from "./teamBoard/projectTeamBoard.container";
import TodoAdd from "./todo-add/todoAdd.container";
import TodoDone from "./todo-done/todoDone.container";
import TodoProgress from "./todo-progress/todoProgress.container";

interface IProsManage{
    onClickonAdd:(() => void) | undefined
}

export default function ProjectManageUI(props : IProsManage) {
    const [toDoTab,setToDoTab] = useState("To do")
    const onClickChangeTab = () => {
        setToDoTab((prev) => prev === "To do" ? "Done" : "To do")
    }
    return (
        <S.ProjectManageStyle>
            <S.ProjectManageImg>
                <img src="/img/pageback.svg" alt="page back location" />
                <img src="/img/contentsmenu.svg" alt="contents menu button" />
            </S.ProjectManageImg>
            <Wrapper paddingTop="30px">
                <S.ProjectManageTop>
                    <h3>자율주행자동차 어플</h3>
                    <h4>long established fact that a reader will be distract</h4>
                    <ul>
                        {
                            new Array(3).fill(1).map(_ => {
                                return <li key={uuidv4()}>
                                    <CircleTag
                                        color="#CCC"
                                        name="태그"
                                        size={12}
                                        margin={"0 8px 10px 0"}
                                    />
                                </li>
                            })
                        }
                    </ul>
                    <S.ProjectListInfo>
                        <li>
                            <S.ProjectInfoKey>팀</S.ProjectInfoKey>
                            <S.ProjectInfoValue>코드 캠프 TOP</S.ProjectInfoValue>
                        </li>
                        <li>
                            <S.ProjectInfoKey>밋업 장소</S.ProjectInfoKey>
                            <S.ProjectInfoValue>코드 캠프 패스트파이브</S.ProjectInfoValue>
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
                </S.ProjectManageTop>
            </Wrapper>
            <Wrapper paddingTop="0">
                    <S.ProjectManageContentsTop>
                        <h3>팀 프로필</h3>
                    </S.ProjectManageContentsTop>
                    <MultiSlide2 />
                    <S.ProjectManageContentsTop>
                        <h3>팀 게시판</h3>
                        <button>
                            <img src="/img/plusicon.svg" alt="contents plus icon" />
                        </button>
                    </S.ProjectManageContentsTop>
                    <S.ProjectManaBoard>
                        {
                            new Array(3).fill(1).map((_) => {
                                return <ProjectTeamBoard key={uuidv4()}/>
                            })
                        }
                    </S.ProjectManaBoard>
                    <S.ProjectManageContentsTop>
                        <h3>To Do List</h3>
                        <button onClick={props.onClickonAdd}>
                            <img src="/img/plusicon.svg" alt="contents plus icon" />
                        </button>
                    </S.ProjectManageContentsTop>
                    <S.ProjectTodoNavTab>
                        <li onClick={onClickChangeTab}>To do</li>
                        <li onClick={onClickChangeTab}>Done</li>
                    </S.ProjectTodoNavTab>
                    {
                        toDoTab === "To do" ? <TodoProgress /> : <TodoDone />
                    }   
                </Wrapper>
                <TodoAdd/>
        </S.ProjectManageStyle>
    )
}