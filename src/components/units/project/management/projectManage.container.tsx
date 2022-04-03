import { createContext, Dispatch, MouseEvent, SetStateAction, useState } from "react";
import ProjectManageUI from "./projectManage.presenter";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

interface IPropsProjectManage {
  project?: string;
}

interface IProjectManagement{
  onClickBoardAdd?: () => void
  setContent?:Dispatch<SetStateAction<string>>
  setTitle?:Dispatch<SetStateAction<string>>
  validContent?:boolean
  validTitle?:boolean
}

const CREATE_BOARD = gql`
  mutation createBoard($title: String!,$content: String!,$projectId: String!){
    createBoard(title:$title,content:$content,projectId:$projectId){
      id
    }
  }
`

export const ProjectManageContext = createContext<IProjectManagement>({});

export default function ProjectManage(props: IPropsProjectManage) {
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
  const router = useRouter()
  const [createBoard] = useMutation(CREATE_BOARD)
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

  return (
    <ProjectManageContext.Provider value={value}>
      <ProjectManageUI project={props.project} onClickonAdd={onClickonAdd} />
    </ProjectManageContext.Provider>
  );
}
