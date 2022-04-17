import { Wrapper } from "../../../../commons/styles/commonStyls";
import { IPropsCommentUI } from "./comment.types";
import { v4 as uuidv4 } from "uuid";
import TypingInput from "../../../commons/inputs/component/typinginput/typinginput.container";
import * as S from "./comment.styles";
import CommentLists from "./commentList/commentList";

export default function CommentUI(props: IPropsCommentUI) {
  return (
    <S.CommentBox>
      <Wrapper paddingTop={"100px"}>
        <h3 className="comment__title">질문 하기</h3>
        <S.QnaFormBox onSubmit={props.onSubmitComment}>
          <div>
            <TypingInput
              type="text"
              placeholder="제목을 입력하세요."
              errorMessage="한 글자 이상 입력해주세요."
              setValues={props.setTitle}
              id="qna_title"
            />
            <S.QnaTextArea
              ref={props.refContent}
              placeholder="질문을 작성해주세요."
            />
          </div>
          <button className="qna__submit">댓글 작성</button>
        </S.QnaFormBox>
        <S.CommentListsBox>
          {props?.qnas?.map((el: any, index: number) => {
            return (
              <CommentLists
                key={uuidv4()}
                imgUrl={el.user.imgUrl}
                name={el.user.name}
                inputId={index + el.title}
                id={el.id}
                title={el.title}
                content={el.content}
                onSubmitCommentUpdate={props.onSubmitCommentUpdate}
                setUpdateForm={props.setUpdateForm}
                userId={props.user}
                userIdCommant={el.user.id}
                onClickDeleteQna={props?.onClickDeleteQna}
                onClickUpdateFormOn={props.onClickUpdateFormOn}
              />
            );
          })}
        </S.CommentListsBox>
      </Wrapper>
    </S.CommentBox>
  );
}
