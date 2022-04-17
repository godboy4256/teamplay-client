import * as S from "../comment.styles";

export default function CommentUpdate(props: any) {
  return (
    <S.QnaFormBox className="update">
      <div>
        <div>
          <S.QnaTitle
            id={props.inputId}
            type="text"
            placeholder="수정할 질문의 제목을 입력해주세요."
          />
        </div>
        <div>
          <S.QnaTextArea
            id={props.inputId + "content"}
            placeholder="수정할 내용을 작성해주세요."
          />
        </div>
        <button
          type="button"
          onClick={props.onSubmitCommentUpdate(
            props.id,
            props.inputId,
            props.inputId + "content"
          )}
          className="qna__submit"
        >
          댓글 수정
        </button>
        <button
          type="button"
          className="qna__submit update__cancle"
          onClick={() => {
            props.setUpdateForm && props.setUpdateForm(false);
          }}
        >
          수정 취소
        </button>
      </div>
    </S.QnaFormBox>
  );
}
