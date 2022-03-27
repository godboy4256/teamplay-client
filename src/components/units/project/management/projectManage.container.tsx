import { MouseEvent } from "react";
import ProjectManageUI from "./projectManage.presenter";

export default function ProjectManage() {
       const onClickonAdd = (e:MouseEvent<HTMLButtonElement>) => {
            if(e.currentTarget.id === "todos"){  
                const onAddref = document.getElementById('onTodoAdd')
                const modalref = document.getElementById('modalBackground')
                onAddref?.classList.add("onClick")
                modalref?.classList.add("onClick")
            }else if(e.currentTarget.id === "board"){
                const onAddref = document.getElementById('onBoardAdd')
                const modalref = document.getElementById('modalBackground')
                onAddref?.classList.add("onClick")
                modalref?.classList.add("onClick")
            }
        }
    return <ProjectManageUI 
        onClickonAdd={onClickonAdd}
    />
    
}