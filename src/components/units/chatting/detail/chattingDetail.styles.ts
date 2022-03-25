import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 15px 10px 30px 10px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Alert = styled.div`
  padding: 4px 0px;
  margin-top: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px 0px 20px;
  margin-bottom: 30px;
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftArrowImg = styled.img`
  width: 12px;
  height: 16px;
  margin-right: 20px;
`;

export const ProjectName = styled.span`
  margin: 0px 10px 0px 5px;
  font-weight: 400;
  font-size: 1.143rem;
`;

export const Tag = styled.div`
  display: inline;
  padding: 2px 6px;
  margin-right: 5px;
  background-color: #68a4ff;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.4rem;
  line-height: 18px;
  color: #fff;
`;

export const Count = styled.span`
  font-weight: 500;
  font-size: 1rem;
  line-height: 18px;
  color: #a4a4a4;
`;

export const DotToggleImg = styled.img`
  width: 2px;
  height: 13px;

  :hover {
    cursor: pointer;
  }
`;

export const ProfileMsgBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const ProfileImg = styled.div`
  display: flex;
  align-content: flex-start;
`;
export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`;

export const Name = styled.div`
  padding: 4px 0px;
  margin-bottom: 2px;
  font-size: 0.857rem;
  font-weight: 400;
  line-height: 14px;
`;

export const ReceiveFirstMessage = styled.div`
  max-width: 51.1vw;
  padding: 12px 15px;
  background: #999999;
  border-radius: 0px 20px 20px 20px;

  white-space: pre-wrap;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;

export const ReceiveMessage = styled.div`
  max-width: 51.1vw;
  padding: 12px 15px;
  background: #999999;
  border-radius: 20px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;

export const ReceiveBox = styled.div`
  width: 100%;
  margin-top: 5px;
  padding-left: 45px;
  display: flex;
  white-space: pre-wrap;
`;

export const SendFirstMessage = styled.div`
  max-width: 51.1vw;
  padding: 12px 15px;
  background: #3894ff;
  border-radius: 20px 0px 20px 20px;

  white-space: pre-wrap;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;

export const SendMessage = styled.div`
  max-width: 51.1vw;
  padding: 12px 15px;
  background: #3894ff;
  border-radius: 20px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;

export const SendFirstBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  white-space: pre-wrap;
`;

export const SendBox = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  white-space: pre-wrap;
`;

export const Time = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 5px;
  margin: 0px 5px 0px 5px;
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  color: #999999;
`;

export const FunctionBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const InputBox = styled.div`
  width: 85%;
  display: flex;
  padding: 4px 10px;
  border: 1px solid #999999;
  border-radius: 22px;
`;
export const SendButton = styled.div`
  padding: 10px 13px;
  border-radius: 50%;
  background: #3894ff;
  position: absolute;
  right: 0;
  bottom: 0;

  img {
    width: 22px;
    height: 23px;
  }
`;

export const UploadImgBtn = styled.div`
  width: 16%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #999999;

  img {
    width: 26px;
    height: 21px;
  }
`;

export const MsgInput = styled.div`
  width: 84%;
  padding: 0px 10px;
`;
