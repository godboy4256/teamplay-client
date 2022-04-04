import { createContext, MouseEvent, useState } from "react";
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
  
  const router = useRouter()

  const [createBoard] = useMutation(CREATE_BOARD)
  const [endProject] = useMutation(END_PROJECT)
  const [deleteProject] = useMutation(DELETE_PROJECT)


  const onClickonAdd = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "todos") {
      const onAddref = document.getElementById("onTodoAdd");
      const modalref = document.getElementById("modalBackground");
      onAddref?.classList.add("onClick");
      modalref?.classList.add("onClick");
    } else if (e.currentTarget.id === "board") {
      const onAddref = document.getElementById("onBoardAdd");
      const modalref = document.getElementById("modalBackground");
      onAddref?.classList.add("onClick");
      modalref?.classList.add("onClick");
    }
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
          }
        })
        console.log(result)
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
    validContent
  }

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

      alert("프로젝트를 성공적으로 마무리 했습니다!!")
      router.push("/project/list")


      console.log(deleteResult)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <ProjectManageContext.Provider value={value}>
      <ProjectManageUI 
      project={props.project} 
      onClickonAdd={onClickonAdd} 
      data={data}
      toDoTab={toDoTab}
      onClickChangeTab={onClickChangeTab}
      projectcomplete={projectcomplete}
      />
    </ProjectManageContext.Provider>
  );
}
