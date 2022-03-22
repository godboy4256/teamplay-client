import { Wrapper } from "../../../../../commons/styles/commonStyls";
import { Label } from "../../../../commons/inputs/commons/styles";
import Date from "../../../../commons/inputs/component/date/date.container";
import SubmitButton from "../../../../commons/inputs/component/submitbutton/submit.container";
import TypingInput from "../../../../commons/inputs/component/typinginput/typinginput.container";
import { TodoWorker } from "../projectManage.styles";
import styled from "@emotion/styled";

const TodoAddStyle = styled.div`
    width: 100%;
    background-color: #ddd;
    flex-direction: column;
    border-radius:20px 20px 0 0;
    display: flex;
    align-items: center;
    position: fixed;
    transition: 0.4s;
    bottom: -100%;
    left: 0;
    opacity: 0;
    &.onClick{
        bottom: 0;
        opacity: 1;
    }
    z-index: 2;
`

const DragBar = styled.div`
    width: 80px;
    height: 3px;
    border-radius: 2px;
    background-color: #fff;
    margin: 5px 0 30px;
    cursor: pointer;
`

const ModalBackground = styled.div`
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: none;
    &.onClick{
        display: block;
    }
`


export default function TodoAdd() {
    const onClickoffAdd = () => {
        const onAddref = document.getElementById('onAdd')
        const modalref = document.getElementById('modalBackground')
        onAddref?.classList.remove("onClick")
        modalref?.classList.remove("onClick")
    }
    return (
        <>
         <ModalBackground id="modalBackground"></ModalBackground>
         <TodoAddStyle id="onAdd">
            <DragBar onClick={onClickoffAdd}></DragBar>
            <Wrapper paddingTop="5px">
                    <TypingInput
                        label="업무 내용"
                        type="text"
                        placeholder="업무 내용을 입력해주세요."
                        />
                    <Date 
                        label="마감 기한"
                        />
                    <div>
                        <Label>담당 팀원</Label>
                        <TodoWorker align="left">
                            <li>지호</li>
                            <li>제이든</li>
                            <li>기창</li>
                        </TodoWorker>
                    </div>
                <SubmitButton btnvalue="업무 추가하기"/>
            </Wrapper>
        </TodoAddStyle>
        </>
       
    )
}