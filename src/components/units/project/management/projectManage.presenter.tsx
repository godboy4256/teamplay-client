import { MouseEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "../../../../commons/styles/commonStyls";
import MultiSlide2 from "../../../commons/slider/component/multislide/multislide2.container";
import * as S from "./projectManage.styles";
import ProjectTeamBoard from "./teamBoard/projectTeamBoard.container";
import TodoAdd from "./todo-add/todoAdd.container";
import TodoDone from "./todo-done/todoDone.container";
import TodoProgress from "./todo-progress/todoProgress.container";
import projectListDummy from '../../../../commons/json/projetList.json'
import SquareTag from "../../../commons/tags/commons/squareTag";
import { MainBox } from "../../main/main.styles";
import BoardAdd from "./boardAdd/BoardAdd";

interface IProsManage{
    onClickonAdd:((e:MouseEvent<HTMLButtonElement>) => void) | undefined
}

export default function ProjectManageUI(props : IProsManage) {

    const tempData = projectListDummy.projectList[0]
    const [toDoTab,setToDoTab] = useState("To do")
    const onClickChangeTab = () => {
        setToDoTab((prev) => prev === "To do" ? "Done" : "To do")
    }

    return (
        <S.ProjectManageStyle>
            <S.ProjectManageImg bgImages={tempData.imgUrl}>
                <button>
                    <img src="/img/commons/leftArrow1.svg" alt="page back location" />
                </button>
                <button>
                    <img src="/img/contentsmenu.svg" alt="contents menu button" />
                </button>
            </S.ProjectManageImg>
            <S.ProjectManageTop>
                <Wrapper paddingTop="30px">
                    <h3>{tempData.name}</h3>
                    <h4>{tempData.description}</h4>
                   <SquareTag 
                        name={tempData.types}
                        size={0.525}
                        bgColor="#C4C4C4"
                     />
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
                    </Wrapper>
                </S.ProjectManageTop>
                <MainBox>
                    <Wrapper paddingTop="0">
                        <div>
                            <S.ProjectManageContentsTop>
                                <h3>팀 프로필</h3>
                                <button>
                                    <img src="/img/contents_menu.svg" alt="contents menu"/>
                                </button>
                            </S.ProjectManageContentsTop>
                            <MultiSlide2 />
                        </div>    
                            <S.ProjectManageContentsTop>
                                <h3>팀 게시판</h3>
                                <button id="board" onClick={props.onClickonAdd}>
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
                                <button id="todos" onClick={props.onClickonAdd}>
                                    <img src="/img/plusicon.svg" alt="contents plus icon" />
                                </button>
                            </S.ProjectManageContentsTop>
                            <S.ProjectTodoNavTab>
                                <li onClick={onClickChangeTab}>해야 하는 업무</li>
                                <li onClick={onClickChangeTab}>완료한 업무</li>
                            </S.ProjectTodoNavTab>
                            {
                                toDoTab === "To do" ? <TodoProgress /> : <TodoDone />
                            }   
                        </Wrapper>
                    </MainBox>
                    <TodoAdd/>
                    <BoardAdd/>
        </S.ProjectManageStyle>
    )
}