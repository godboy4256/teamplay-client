import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;

  padding: 20px 20px 40px 20px;
`;
export const XmarkBox = styled.div`
  position: relative;
  margin-bottom: 72px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Subscript = styled.div`
  margin-bottom: 80px;
  span {
    display: block;

    font-family: GLight;
    font-weight: 300;
    font-size: 1rem;
    line-height: 20px;
    text-align: center;
    color: #999999;
  }
`;

export const EmailInput = styled.input`
  width: 100%;

  margin-bottom: 10px;
  border-bottom: 1px solid #c4c4c4;
  padding: 13px 0px;

  font-weight: 500;
  font-size: 1.143rem;
  line-height: 18px;

  ::placeholder {
    font-weight: 500;
    font-size: 1.143rem;
    line-height: 18px;
    color: #999999;
  }
`;

export const PassBox = styled.div`
  height: 5vh;

  display: flex;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 12px;

  input {
    width: 100%;
    height: 100%;

    padding: 13px 0px;
    padding-right: 20px;

    font-weight: 500;
    font-size: 1.143rem;
    line-height: 18px;

    ::placeholder {
      font-weight: 500;
      font-size: 1.143rem;
      line-height: 18px;
      color: #999999;
    }
  }
`;

export const EyeImg = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  img {
    height: 30%;
  }

  :hover {
    cursor: pointer;
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 36px 0px;

  font-weight: 500;
  font-size: 1rem;
  line-height: 16px;
  color: #999999;
`;

export const SocialText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #999999;
`;

export const SocialImgBox = styled.div`
  padding: 0px 95px;
  margin-bottom: 127px;

  div {
    display: flex;
    justify-content: space-between;
  }

  img {
    height: 36px;
  }
`;

export const Cancel = styled.button`
  width: 100%;
  padding: 12px 0px;
  border: 1px solid #e9e9e9;
  border-radius: 20px;
  background-color: #fff;

  font-weight: 500;
  font-size: 1rem;
  line-height: 16px;
  color: #999999;
`;
