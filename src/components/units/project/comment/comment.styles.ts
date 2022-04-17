import styled from "@emotion/styled";

export const QnaFormBox = styled.form`
  &.update {
    margin-top: 10px;
  }
  border: 1px solid #ccc;
  padding: 10px;
  & label {
    padding-top: 0;
  }
  & select {
    border: 1px solid #ccc;
    margin: 10px 10px 0 0;
    padding: 5px 10px;
  }
  & .qna__submit {
    background-color: #3894ff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1rem;
    color: #fff;
    white-space: nowrap;
    &.update__cancle {
      margin-left: 10px;
    }
  }
  #qna_title {
    margin-bottom: 10px;
  }
`;

export const QnaTitle = styled.input`
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 6px;
  margin-bottom: 10px;
  transition: 0.4s;
  &::placeholder {
    font-size: 14px;
    color: #999;
    font-weight: 600;
  }
  &:focus {
    border-color: #3894ff;
  }
`;

export const CommentListsBox = styled.ul`
  margin-top: 50px;
`;

export const CommentBox = styled.div`
  & .comment__title {
    font-size: 16px;
    padding-bottom: 20px;
  }
  & .user {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    & > .user__profile {
      display: flex;
      align-items: center;
    }
    & .user__img {
      width: 30px;
      margin-right: 10px;
      & > img {
        width: 100%;
      }
    }
  }
  & .commant__info {
    display: flex;
    flex-direction: column;
  }
  & .qna__type {
    & span {
      display: block;
      padding: 5px 10px;
      color: #fff;
      border-radius: 5px;
    }
    & .ans {
      background-color: #3894ff;
    }
    & .qus {
      background-color: #ccc;
    }
  }
`;

export const CommentList = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 10px;
  & h3 {
    font-size: 16px;
    padding-bottom: 10px;
    color: #3894ff;
  }
  & h4 {
    font-size: 13px;
  }
`;

export const QnaTextArea = styled.textarea`
  width: 100%;
  display: block;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  transition: 0.4s;
  ::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    border-color: #3894ff;
  }
`;

export const QnaSetting = styled.div`
  display: flex;
  position: relative;
  & > button {
    width: 20px;
    margin-right: 10px;
    & > img {
      width: 100%;
    }
  }
`;

export const ErroFont = styled.span`
  display: block;
  color: red;
  padding: 3px 0 5px;
`;
