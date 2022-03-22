import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    position: absolute;

    transform: translate(0%, -11%);
`

export const Modal = styled.div`
    width: 100%;
    height: 100%;
`

export const ImgBox = styled.div`
    width: 100%;
    height: 31vh;

    position: relative;

    .Xmark {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`
export const Img = styled.img`
    width: 100%;
    height: 100%;

    position: absolute;
`

export const TitleBox = styled.div`
    width: 100%;

    padding: 24px 15px;
    border: 0.75px solid #dddddd;
`

export const Dday = styled.div`
    display: inline;
    padding: 1px 4px;
    background-color: #A3A3A3;

    span {
        font-size: 12px;
        color: #FFFFFF;
    }
`
export const Func = styled.div`
    float: right;
`

export const Title = styled.div`
    padding: 15px 0px 5px 0px;

    span {
        font-weight: 400;
        font-size: 24px;
        color: #0d223a;
    }
`

export const Remarks = styled.div`
    padding: 12px 0px;

    span {
        font-weight: 400;
        font-size: 13px;
        color: #999999;
    }
`

export const TagBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ProjectInfoBox = styled.ul`
    padding: 18px 15px;
    border: 0.75px solid #dddddd;
`

export const InfoBox = styled.li`
    display: flex;
    padding: 1px 0px;
`
export const InfoName = styled.div`
    width: 30%;
    padding: 6px 0px;

    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    color: #0D223A;
`
export const InfoContents = styled.div`
    width: 70%;
    padding: 6px 0px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #999999;
`

export const TeamInfoBox = styled.div`
    padding: 12px 0px 24px 15px;
    border: 0.75px solid #dddddd;
`

export const WantedBox = styled.div`
    display: flex;
    flex-wrap: nowrap;

    overflow: hidden;
`

export const ProfileBox = styled.div`
    width: 60%;
    padding: 16px;
    margin-top: 15px;
    margin-right: 10px;

    background: #F3F9FF;
    border-radius: 12px;
`

export const ProfileInfo = styled.div`
    display: flex;
`

export const UserInfo = styled.div`
    width: 80%;
`

export const UserImg = styled.div`
    width: 20%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    img {
        width: 100%;
    }
`

export const UserPosition = styled.div`
    margin-top: 15px;
    padding: 12px 0px;

    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    
    color: #0D223A;
`;

export const UserCount = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #999999;
`;

export const ButtonBox = styled.div`
    display: flex;

    padding: 15px 15px;
    border: 0.75px solid #dddddd;
`

export const DetailBtn = styled.div`
    padding: 0px 50px;

    font-weight: 900;
    font-size: 16px;
    line-height: 18px;

    color: #0D223A;
`
export const QnABtn = styled.div`
    padding: 0px 50px;

    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    color: #0D223A;
`

export const SubmitBox = styled.div`
    padding: 0px 15px;

    transform: translate(0%, -110%);
`