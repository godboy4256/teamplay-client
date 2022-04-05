import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "../../../../commons/styles/commonStyls";
import * as S from "./projectManage.styles";
import ProjectTeamBoard from "./teamBoard/projectTeamBoard.container";
import TodoAdd from "./todo-add/todoAdd.container";
import TodoDone from "./todo-done/todoDone.container";
import TodoProgress from "./todo-progress/todoProgress.container";
import SquareTag from "../../../commons/tags/commons/squareTag";
import { MainBox } from "../../main/main.styles";
import BoardAdd from "./boardAdd/BoardAdd";
import SubmitButton from "../../../commons/inputs/component/submitbutton/submit.container";
import BoardUpdate from "./boardUpdate/BoardUpdate";

interface IProsManage {
  onClickonAdd: ((e: MouseEvent<HTMLButtonElement>) => void) | undefined;
  project?: string;
  data?:any;
  toDoTab:string;
  onClickChangeTab:() => void
  projectcomplete:() => void
  setOnUpdate:Dispatch<SetStateAction<boolean>>
  onAdd:boolean
  onUpdate:boolean
  setBoardId?:Dispatch<SetStateAction<string>>
  boardId?:string
  onClickUpdateBoard?:any
}


// const NOT_COMPLETE_TASK = gql`
//   mutation notCompleteTask($taskId:String!){
//     notCompleteTask(taskId:$taskId){
//       id
//       is_complete
//     }
//   }
// `


export default function ProjectManageUI(props: IProsManage) {
   const complete = props?.data?.fetchProject.task.filter((el:any) => {
     return el.is_complete
   })
  const [todoOn,setTodoOn] = useState(false)
  return (
    <S.ProjectManageStyle>
      <S.ProjectImgBox>
        {props?.data?.fetchProject.imgUrl ? (
          props?.data?.fetchProject.imgUrl.includes(
            "cdn-cashy-static-assets.lucidchart.com/"
          ) ? (
            <S.ProjectManageImg src={props?.data?.fetchProject.imgUrl} />
          ) : (
            <S.ProjectManageImg
              src={`https://storage.googleapis.com/${props?.data?.fetchProject.imgUrl}`}
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
              <h3>{props?.data?.fetchProject.name}</h3>
              <h4>{props?.data?.fetchProject.description}</h4>
              <SquareTag
                name={props?.data?.fetchProject.type.name}
                size={0.525}
                bgColor="#C4C4C4"
              />
            </div>
            <S.ProjectListInfo>
              <li>
                <S.ProjectInfoKey>팀</S.ProjectInfoKey>
                <S.ProjectInfoValue>
                  {props?.data?.fetchProject.teamname}
                </S.ProjectInfoValue>
              </li>
              <li>
                <S.ProjectInfoKey>진행 방식</S.ProjectInfoKey>
                <S.ProjectInfoValue>
                  {props?.data?.fetchProject.method === "UNTACT" && "비대면"}
                  {props?.data?.fetchProject.method === "MEET" && "대면"}
                  {props?.data?.fetchProject.method === "MEDIATE" && "조정 가능"}
                </S.ProjectInfoValue>
              </li>
              <li>
                <S.ProjectInfoKey>업무 진행률</S.ProjectInfoKey>
                <S.ProjectInfoValue>
                  <S.ProjectStatusBox>
                    <S.ProjectStatus status={complete && complete.length/props?.data?.fetchProject.task.length*100}>
                      {Math.round(complete && complete.length/props?.data?.fetchProject.task.length*100)} %
                    </S.ProjectStatus>
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
              <div>
                {
                props.data?.fetchProject.projectMembers.length >= 1 ? 
                props.data?.fetchProject.projectMembers?.map((el:any,index:number) => {
                  if(index === 0){
                    return null
                  }
                  return <S.ProjectMembers key={uuidv4()}>
                    <div className="left_img">
                    {
                      el.user?.imgUrl ? 
                      <img src={el.user?.imgUrl} alt="profile" /> : <img src="/img/unprofile.svg" alt="unprofile"/>
                    }
                    </div>
                    <div className="right_info">
                      <div className="name">{el.user?.name && el.user?.name}</div>
                      <div className="position">{el.user?.position?.name ? el.user?.position?.name : "포지션 미정"}</div>
                    </div>
                  </S.ProjectMembers>
                }): <div>팀원이 없습니다.</div>
                } 
              </div>

            </div>
            <div>
              <S.ProjectManageContentsTop>
                <h3>팀 게시판</h3>
                <button id="board" onClick={props.onClickonAdd}>
                  <img src="/img/plusicon.svg" alt="contents plus icon" />
                </button>
              </S.ProjectManageContentsTop>
              <S.ProjectManaBoard>
                {
                props.data?.fetchProject.board.length === 0 ? <div>게시물이 없습니다.</div> :
                props.data?.fetchProject.board.map((el:any) => {
                  return <ProjectTeamBoard 
                    key={uuidv4()} 
                    title={el.title} 
                    content={el.content} 
                    createdAt={el.createdAt}
                    id={el.id}
                    onUpdate={props.onUpdate}
                    setOnUpdate={props.setOnUpdate}
                    setBoardId={props.setBoardId}
                    onClickUpdateBoard={props.onClickUpdateBoard}
                  />;
                })}
              </S.ProjectManaBoard>
            </div>
          </S.ProjectResponsiveWeb>
          <S.ResponsiveMobleTodoList>
            <S.ProjectManageContentsTop>
              <h3>To Do List</h3>
              <button id="todos" onClick={() => setTodoOn(true)}>
                <img src="/img/plusicon.svg" alt="contents plus icon" />
              </button>
            </S.ProjectManageContentsTop>
            <S.ProjectTodoNavTab>
              <li onClick={props?.onClickChangeTab}>해야 하는 업무</li>
              <li onClick={props?.onClickChangeTab}>완료한 업무</li>
            </S.ProjectTodoNavTab>
            {props?.toDoTab === "To do" ? <TodoProgress data={props.data} /> : <TodoDone  data={props.data}/>}
          </S.ResponsiveMobleTodoList>

          <S.ResponsiveWebTodoList>
            <S.ProjectManageContentsTop>
              <h3>To Do List</h3>
              <button id="todos" onClick={() => setTodoOn(true)}>
                <img src="/img/plusicon.svg" alt="contents plus icon" />
              </button>
            </S.ProjectManageContentsTop>
            <S.ProjectTodoNavTab>
              <li onClick={props?.onClickChangeTab}>
                <h3>해야 하는 업무</h3>
                <TodoProgress data={props.data} />
              </li>
              <li onClick={props?.onClickChangeTab}>
                <h3>완료한 업무</h3>
                <TodoDone data={props.data}/>
              </li>
            </S.ProjectTodoNavTab>
          </S.ResponsiveWebTodoList>
        </Wrapper>
      </MainBox>
      {todoOn ? <TodoAdd data={props.data} setTodoOn={setTodoOn}/> : null}
      {props.onAdd ? <BoardAdd /> : null}
      {props.onUpdate ? <BoardUpdate boardId={props.boardId}/> : null}
      <S.ProjectCompleteButton>
      <SubmitButton onClick={props.projectcomplete} btnvalue="프로젝트 완료" />
      </S.ProjectCompleteButton>
    </S.ProjectManageStyle>
  );
}
