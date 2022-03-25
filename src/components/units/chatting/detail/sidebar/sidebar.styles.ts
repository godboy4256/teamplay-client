import styled from "@emotion/styled";
import { ISidebarWrapper, ISideIsToggle } from "../chattingDetail.types";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  right: ${(props: ISidebarWrapper) => `${props.position}vw`};
  transition: all 0.25s;
  z-index: 2;
`;

export const Opacity = styled.div`
  display: ${(props: ISideIsToggle) => (props.isToggle ? "block" : "none")};
  position: absolute;
  left: 0;
  width: 30vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const MainBox = styled.div`
  padding: 15px 10px;
  width: 70vw;
  height: 100vh;
  background-color: #fff;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 30px;
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectName = styled.span`
  margin: 0px 10px 0px;
  font-weight: 400;
  font-size: 1.143rem;
`;

export const Tag = styled.div`
  display: inline;
  padding: 2px 6px;
  margin-right: 5px;
  background-color: #c4c4c4;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.4rem;
  line-height: 18px;
  color: #fff;

  :hover {
    cursor: pointer;
    background-color: #68a4ff;
  }
`;

export const Count = styled.span`
  font-weight: 500;
  font-size: 1rem;
  line-height: 18px;
  color: #a4a4a4;
`;

export const Xmark = styled.img`
  width: 14px;
  position: absolute;
  top: 1px;
  right: 3px;

  :hover {
    cursor: pointer;
  }
`;

export const SubTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SubTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 14px;
`;

export const UserProfileBox = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;
export const ProfileImg = styled.div`
  width: 20%;
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

export const NameBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  padding: 4px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 14px;
`;

export const SelectCircle = styled.div`
  margin-right: 5px;
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    display: inline-block;
    width: 5vw;
    height: 5vw;
    border: 2px solid #707070;
    border-radius: 50%;
    position: relative;

    :hover {
      cursor: pointer;
    }
  }

  input:checked + label::after {
    content: "";
    background-color: #68a4ff;
    border: 1px solid #707070;
    border-radius: 50%;
    width: 3.5vw;
    height: 3.5vw;
    position: absolute;
    right: 0px;
    top: 0px;
    left: 0px;
    bottom: 0px;

    :hover {
      cursor: pointer;
    }
  }
`;
