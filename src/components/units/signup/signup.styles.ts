import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;

  padding: 18px 18px 40px 18px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 60px;

  font-weight: 500;
  font-size: 20px;
  color: #9d9d9d;
`;

export const Name = styled.div`
  margin-bottom: 5px;

  font-weight: 500;
  font-size: 16px;

  color: #9d9d9d;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 8px;
  border: 1px solid #cacaca;

  font-weight: 500;
  font-size: 14px;

  ::placeholder {
    color: #c4c4c4;
  }
`;

export const Auth = styled.div`
  button {
    background-color: #e5e5e5;
    padding: 13px 8px;
    font-weight: 500;
    font-size: 14px;

    color: #c4c4c4;
  }

  input {
    width: calc(100% - 107px);
    padding: 12px 8px;
    margin-right: 6px;
    margin-bottom: 4px;
    border: 1px solid #cacaca;

    font-weight: 500;
    font-size: 14px;

    ::placeholder {
      color: #c4c4c4;
    }
  }
`;

export const ErrorMsg = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 12px;

  color: #9b9898;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  span {
    font-weight: 500;
    font-size: 14px;

    color: #9d9d9d;
  }

  input {
    width: 16px;
    height: 16px;
    margin-right: 5px;

    border-radius: 5px;
  }
`;

export const PhoneAuth = styled.div`
  display: none;
`;
