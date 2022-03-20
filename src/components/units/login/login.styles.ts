import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;

  padding: 40px 20px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 70px 54px 125px 54px;

  font-weight: 700;
  font-size: 36px;

  color: #c1c1c1;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 5vh;

  margin-bottom: 20px;
  border-bottom: 1px solid #c4c4c4;

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
`;

export const PassBox = styled.div`
  height: 5vh;

  display: flex;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 8px;

  input {
    width: 100%;
    height: 100%;

    padding-right: 20px;

    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const EyeImg = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  img {
    height: 60%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 50px 152px;

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  color: #9d9d9d;
`;

export const SocialText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  color: #9d9d9d;
`;

export const SocialImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 127px;

  div {
    width: 30%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 36px;
  }
`;
