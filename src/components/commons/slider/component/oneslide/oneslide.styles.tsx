import styled from "@emotion/styled";

export const OneSlideBox = styled.div`
    position: relative;
    height: 220px;
`

export const OneSlideContents = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    color: #fff;
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & h2{
        font-size: 20px;
        padding-bottom: 15px;
        font-weight: 800;
    }
    & h3{
        font-size: 14px;
    }
    & img{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    &>div{
        position: absolute;
        z-index: 1;
    }
`

export const OneSlideTopic = styled.div`
    font-size: 8px;
    padding:3px 15px;
    border:1px solid #c4c4c4;
    display: inline-block;
    border-radius: 4px;
    margin-bottom: 14px;
`


export const SliderStyle = styled.div`
    width: 100%;
    position: relative;
    & .slick-dots{
        position: absolute;
        bottom:9px;
    }
    & .slick-dots li button{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        &::before{
            display: none;
        }
    }
    & .slick-dots li.slick-active button{
        background-color: #595959;
    }
    
`
