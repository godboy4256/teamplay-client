import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent, ChangeEvent, useState, useRef } from "react";
import useFetchUser from "../../../commons/hooks/useFetchUser";
import CommentUI from "./comment.presenter";
import {
  CREATE_QNA,
  DELETE_QNA,
  FETCH_QNAS,
  UPDATE_QNA,
} from "./comment.query";
import { IPropsComment } from "./comment.types";

export default function Comment(props: IPropsComment) {
  const [createQna] = useMutation(CREATE_QNA);
  const [deleteQna] = useMutation(DELETE_QNA);
  const [updateQna] = useMutation(UPDATE_QNA);
  const { data: user } = useFetchUser();
  const { data } = useQuery(FETCH_QNAS, {
    variables: {
      projectId: props.projectId,
    },
  });

  const [title, setTitle] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const [qnaType, setQnaType] = useState("QUESTION");

  const refContent = useRef<HTMLTextAreaElement>(null);
  const onChangeQnaType = (e: ChangeEvent<HTMLSelectElement>) => {
    setQnaType(e.currentTarget.value);
  };

  const onSubmitComment = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && refContent?.current?.value) {
      try {
        await createQna({
          variables: {
            title,
            content: refContent?.current?.value,
            projectId: props.projectId,
            qnaType,
          },
          refetchQueries: [FETCH_QNAS],
        });
        setTitle("");
        alert("질문을 완료했습니다.");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("제목과 질문 모두 한 글자 이상 입력해주세요.");
    }
  };

  const onSubmitCommentUpdate =
    (target: string, inputId: string, contentId: string) =>
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const titleTarget: any = document.getElementById(inputId);
      const contentTarget: any = document.getElementById(contentId);

      if (contentTarget.value && titleTarget.value) {
        try {
          await updateQna({
            variables: {
              title: titleTarget.value,
              content: contentTarget.value,
              qnaId: target,
            },
            refetchQueries: [FETCH_QNAS],
          });
          alert("질문이 수정되었습니다.");
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("제목과 질문 모두 한 글자 이상 입력해주세요.");
      }
    };

  const onClickDeleteQna = (target: string) => async () => {
    try {
      await deleteQna({
        variables: {
          qnaId: target,
        },
        refetchQueries: [FETCH_QNAS],
      });
      alert("QNA를 삭제하였습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const onClickUpdateFormOn = () => {
    setUpdateForm(true);
  };

  return (
    <CommentUI
      onSubmitComment={onSubmitComment}
      onChangeQnaType={onChangeQnaType}
      qnas={data?.fetchQnas}
      user={String(user?.fetchUser?.id)}
      refContent={refContent}
      setTitle={setTitle}
      onClickDeleteQna={onClickDeleteQna}
      onClickUpdateFormOn={onClickUpdateFormOn}
      updateForm={updateForm}
      setUpdateForm={setUpdateForm}
      onSubmitCommentUpdate={onSubmitCommentUpdate}
    />
  );
}
