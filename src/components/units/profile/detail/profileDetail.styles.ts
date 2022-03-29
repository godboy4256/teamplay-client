import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px 20px 20px 20px;
`
export const Top = styled.div`
    width: 100%;
    margin-bottom: 20px;
`
export const TopHeader = styled.div`
    width: 100%;
    margin-bottom: inherit;
    span{
        font-size: 18px;
    }
`
export const TopTagBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`
export const Middle = styled.div`
    width: 100%;
    margin-bottom: 20px;
`
export const MiddleHeader = styled.div`
    margin-bottom: inherit;
    span{
        font-size: 18px;
    }
`
export const MiddleTagBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 2em;
    padding: 20px;
    
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`
export const Bottom = styled.div`
    width: 100%;
`
export const BottomHeader = styled.div`
    margin-bottom: 20px;
    span{
        font-size: 18px;
    }   
`
export const BottomInnerBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 2em;
    padding: 20px;

    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`

export const ProjectWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px 20px 20px 20px;
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    img {
        margin-right: 8px;
        :hover{
            cursor: pointer;
        }
    }
`
export const ProjectBox = styled.div`
    width: 100%;
    margin: 0 auto;
    column-count: 2;
    column-gap: 20px;

    @media ${breakPoints.tablet} {
        column-count: 3;
        column-gap: 20px;
    }

    @media ${breakPoints.web} {
        column-count: 4;
        column-gap: 20px
    }
`

export const ProjectImgItem = styled.div`
    margin: 0 0 20px 0;
    line-height: 0;    

    img {
        width: 100%;
        height: 80%;
        border-radius: 15px;
        margin-bottom: 12px;
        overflow: hidden;
        box-shadow: 0 8px 20px -15px #000;
    }
`
