import { Wrapper } from "../../../../../commons/styles/commonStyls";
import { Label } from "../../../../commons/inputs/commons/styles";
import Date from "../../../../commons/inputs/component/date/date.container";
import SubmitButton from "../../../../commons/inputs/component/submitbutton/submit.container";
import TypingInput from "../../../../commons/inputs/component/typinginput/typinginput.container";
import { TodoWorker } from "../projectManage.styles";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { useState } from "react";
import { breakPoints } from "../../../../../commons/styles/breakpoint";

const TodoAddStyle = styled.div`
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  position: fixed;
  transition: 0.4s;
  bottom: -100%;
  left: 0;
  opacity: 0;
  &.onClick {
    bottom: 0;
    opacity: 1;
  }
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  & > div > div {
    width: 100%;
  }
  z-index: 2;
  @media ${breakPoints.web} {
    display: flex;
    bottom: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    border-radius: 30px;
    justify-content: center;
    &.onClick {
      opacity: 1;
    }
  }
`;

const DragBar = styled.div`
  width: 80px;
  height: 3px;
  border-radius: 2px;
  background-color: #c0c1c2;
  margin: 5px 0 30px;
  cursor: pointer;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  &.onClick {
    display: block;
  }
`;

export default function TodoAdd() {
  const [valid, setValid] = useState("");
  const onClickoffAdd = () => {
    const onAddref = document.getElementById("onTodoAdd");
    const modalref = document.getElementById("modalBackground");
    onAddref?.classList.remove("onClick");
    modalref?.classList.remove("onClick");
  };

  return (
    <>
      <ModalBackground id="modalBackground"></ModalBackground>
      <TodoAddStyle id="onTodoAdd">
        <DragBar onClick={onClickoffAdd}></DragBar>
        <Wrapper paddingTop="5px">
          <TypingInput
            label="업무 내용"
            type="text"
            placeholder="업무 내용을 입력해주세요."
            setValues={setValid}
            id="name"
            valid={valid}
            errorMessage="프로젝트 이름을 한 글자 이상 입력해야 합니다."
          />
          <Date label="마감 기한" />
          <div>
            <Label>담당 팀원</Label>
            <TodoWorker align="left">
              {new Array(3).fill(1).map((_) => {
                return (
                  <li key={uuidv4()}>
                    <button>
                      <img src="/img/user01.png" alt="user img" />
                    </button>
                  </li>
                );
              })}
            </TodoWorker>
          </div>
          <SubmitButton btnvalue="업무 추가하기" />
        </Wrapper>
      </TodoAddStyle>
    </>
  );
}
