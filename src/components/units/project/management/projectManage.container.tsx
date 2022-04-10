import { createContext, useState } from "react";
import ProjectManageUI from "./projectManage.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchProjectArgs,
} from "../../../../commons/types/generated/types";
import { CREATE_BOARD, DELETE_PROJECT, END_PROJECT, FETCH_PROJECT } from "./projectManage.queries";
import { IProjectManagement, IPropsProjectManage } from "./projectManage.types";

export const ProjectManageContext = createContext<IProjectManagement>({});

export default function ProjectManage(props: IPropsProjectManage) {
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
  const [onAdd,setOnAdd] = useState(false)
  const [onUpdate,setOnUpdate] = useState(false)
  const router = useRouter()

  const [createBoard] = useMutation(CREATE_BOARD)
  const [endProject] = useMutation(END_PROJECT)
  const [deleteProject] = useMutation(DELETE_PROJECT)


  const onClickonAdd = () => {
    setOnAdd(true)
  };

  const [validTitle, setValidTitle] = useState(false);
  const [validContent, setValidContent] = useState(false);  
  const onClickBoardAdd = async () => {
    if (title === "") {
      setValidTitle(true);
    } else {
      setValidTitle(false);
    }

    if (content === "") {
      setValidContent(true);
    } else {
      setValidContent(false);
    }

    if(title && content){
      try{
        const result = await createBoard({
          variables : {
            title,
            content,
            projectId:router.query.temp
          },
          refetchQueries:[FETCH_PROJECT]
        })
        console.log(result)
        setOnAdd(false)
        alert("게시글이 등록되었습니다.")
      }catch(error){
        console.log(error)
      }
    }
  }


  const value = {
    onClickBoardAdd,
    setTitle,
    setContent,
    validTitle,
    validContent,
    setOnAdd,
    setOnUpdate,
    title,
    content,
    setValidTitle,
    setValidContent,
  }

  const { data } = useQuery<
    Pick<IQuery, "fetchProject">,
    IQueryFetchProjectArgs
  >(FETCH_PROJECT, {
    variables: {
      projectId: props.project || "",
    },
  });
  const [toDoTab, setToDoTab] = useState(true);
  const [doneTab, setDoneTab] = useState(false);
  const [boardId,setBoardId] = useState("");

  const onClickChangeTabTodo = () => {
    setToDoTab(true);
    setDoneTab(false);
  };

  const onClickChangeTabDone = () => {
    setToDoTab(false);
    setDoneTab(true);
  };

  const projectcomplete = async () => {
    try{
      const result = await endProject({
        variables:{
          projectId : props.project
        }
      })
      const deleteResult = await deleteProject({
        variables:{
          projectId: props.project
        }
      })

      console.log(result)
      console.log(deleteResult)

      alert("프로젝트를 성공적으로 마무리 했습니다!!")
      router.push("/project/list")

    }catch(error){
      console.log(error)
    }
  }

  const onClickUpdateBoard = (bid:string) => () => {
    setOnUpdate(true)
    setBoardId(bid)
  }


  return (
    <ProjectManageContext.Provider value={value}>
      <ProjectManageUI 
        project={props.project} 
        onClickonAdd={onClickonAdd} 
        data={data}
        toDoTab={toDoTab}
        doneTab={doneTab}
        onClickChangeTabTodo={onClickChangeTabTodo}
        onClickChangeTabDone={onClickChangeTabDone}
        projectcomplete={projectcomplete}
        setOnUpdate={setOnUpdate}
        onAdd={onAdd}
        onUpdate={onUpdate}
        setBoardId={setBoardId}
        boardId={boardId}
        onClickUpdateBoard={onClickUpdateBoard}
      />
    </ProjectManageContext.Provider>
  );
}
