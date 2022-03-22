import ProjectManageUI from "./projectManage.presenter";

export default function ProjectManage() {
    const onClickonAdd = () => {
        const onAddref = document.getElementById('onAdd')
        const modalref = document.getElementById('modalBackground')
        onAddref?.classList.add("onClick")
        modalref?.classList.add("onClick")
    }
    return <ProjectManageUI 
        onClickonAdd={onClickonAdd}
    />
    
}