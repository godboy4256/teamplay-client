import { Wrapper } from "../../../../../commons/styles/commonStyls";
// import { Label } from "../../../../commons/inputs/commons/styles";
import DateInput from "../../../../commons/inputs/component/date/date.container";
import SubmitButton from "../../../../commons/inputs/component/submitbutton/submit.container";
import TypingInput from "../../../../commons/inputs/component/typinginput/typinginput.container";
// import { TodoWorker } from "../projectManage.styles";
// import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useState } from "react";
import { breakPoints } from "../../../../../commons/styles/breakpoint";
import TagBox from "../../new/tagbox/TagBox";
import { gql, useMutation } from "@apollo/client";
import { FETCH_PROJECT } from "../projectManage.queries";
// import TeamProfile from "./teamProfile";

const CREATE_TASK = gql`
  mutation createTask(
    $projectId: String!
    $content: String!
    $limit: DateTime!
    $taskType: TASK_TYPE_ENUM!
    $userIds: [String!]!
  ) {
    createTask(
      projectId: $projectId
      content: $content
      limit: $limit
      taskType: $taskType
      userIds: $userIds
    ) {
      id
    }
  }
`;

const TodoAddStyle = styled.div`
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  position: fixed;
  transition: 0.4s;
  bottom: 0;
  left: 0;
  opacity: 1;
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
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 30vw;
    border-radius: 12px;
    opacity: 1;
  }
`;

const OffAdd = styled.button`
  width: 20px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  & > img {
    width: 100%;
  }
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
`;

interface IPropsTodoAdd {
  data: any;
  setTodoOn: Dispatch<SetStateAction<boolean>>;
}

export default function TodoAdd(props: IPropsTodoAdd) {
  // const [warker,setWarker] = useState<string[]>([])

  const [content, setContent] = useState("");
  const [contentValid, setContentValid] = useState(false);
  const [createTask] = useMutation(CREATE_TASK);
  const onClickoffAdd = () => {
    props.setTodoOn(false);
  };

  const [limit, setLimit] = useState("");

  const [field, setField] = useState("");
  const [fieldValid, setFieldValid] = useState(false);

  const onClickcreateTask = async () => {
    if (field === "") {
      setFieldValid(true);
    } else {
      setFieldValid(false);
    }

    if (content === "") {
      setContentValid(true);
    } else {
      setContentValid(false);
    }

    if (content && field) {
      try {
        await createTask({
          variables: {
            projectId: props?.data?.fetchProject?.id,
            content,
            limit: String(limit),
            taskType: field,
            userIds: "",
          },
          refetchQueries: [FETCH_PROJECT],
        });
        alert("??? ?????? ?????????????????????.");
        onClickoffAdd();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <ModalBackground id="modalBackground"></ModalBackground>
      <TodoAddStyle id="onTodoAdd">
        <OffAdd onClick={() => props.setTodoOn(false)}>
          <img
            src="/img/down-arrow-black.svg"
            className="Xmark"
            alt="down-arrow"
          />
        </OffAdd>
        <Wrapper paddingTop="5px">
          <TypingInput
            label="?????? ??????"
            type="text"
            placeholder="?????? ????????? ??????????????????."
            setValues={setContent}
            id="name"
            valid={contentValid}
            errorMessage="???????????? ????????? ??? ?????? ?????? ???????????? ?????????."
          />
          <DateInput
            label="?????? ??????"
            setValues={setLimit}
            warringText="* ?????? ????????? ???????????? ????????? ???????????? ???????????? ???????????????."
          />
          <TagBox
            list={[
              { name: "??????", id: "PLANNING" },
              { name: "?????????", id: "DESIGN" },
              { name: "??????", id: "DEVELOPMENT" },
            ]}
            label="??????"
            checkBox={false}
            valid={fieldValid}
            setValues={setField}
            errorMessage="????????? ??????????????????."
          />
          <SubmitButton onClick={onClickcreateTask} btnvalue="?????? ????????????" />
        </Wrapper>
      </TodoAddStyle>
    </>
  );
}
