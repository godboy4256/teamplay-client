import CommentUpdate from "../commentUpdate/commentUpdate";
import * as S from "../comment.styles";
import { useState } from "react";

export default function CommentLists(props: any) {
  const [updateForm, setUpdateForm] = useState(false);
  return (
    <S.CommentList>
      <div className="commant__info">
        <div className="user">
          <div className="user__profile">
            <div className="user__img">
              {props.imgUrl ? (
                <img src={props.imgUrl} alt="profile" />
              ) : (
                <img src="/img/unprofile.svg" alt="unprofile" />
              )}
            </div>
            <div>{props.name}</div>
          </div>
          <div>
            {props.userId === props.userIdCommant && (
              <S.QnaSetting>
                <button onClick={() => setUpdateForm(true)}>
                  <img src="/img/edit.svg" alt="edit" />
                </button>
                <button
                  onClick={
                    props?.onClickDeleteQna && props?.onClickDeleteQna(props.id)
                  }
                >
                  <img src="/img/delete.svg" alt="delete" />
                </button>
              </S.QnaSetting>
            )}
          </div>
        </div>
      </div>
      <div>
        <h3>{props.title}</h3>
        <h4>{props.content}</h4>
      </div>
      {updateForm && (
        <CommentUpdate
          setUpdateTitle={props.setUpdateTitle}
          valid={props.validTitle}
          onSubmitCommentUpdate={props.onSubmitCommentUpdate}
          setUpdateForm={setUpdateForm}
          id={props.id}
          inputId={props.inputId}
        />
      )}
    </S.CommentList>
  );
}
