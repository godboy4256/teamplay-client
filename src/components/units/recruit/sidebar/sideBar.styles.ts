import styled from "@emotion/styled";
import { ISideBarWrapper } from "../recruit.types";

export const WrapperRelative = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    display: flex;
    overflow: hidden;
    z-index: 3;
    position: fixed;
    right: 0px;
    left: 0px;

    bottom: ${(props:ISideBarWrapper) => `${props.locate}vw`};
    transition: all 0.3s;

    filter: drop-shadow(0px -8px 20px rgba(0, 0, 0, 0.15));
    border-radius: 20px 20px 0px 0px;
    background: #FFFFFF;

    & div > div{
        margin-right: 24px;
        cursor: pointer;
    }
`
export const TopNavi = styled.div`
    display: flex;
`