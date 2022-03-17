import styled from '@emotion/styled';

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    font-size: 23px;
    padding: 0px 20px 0px 20px;
`
export const ContentsBox = styled.div`
    width: auto;
    padding: 0px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Propose = styled.div`
    width: auto;
    border-radius: 0px 24px 24px 24px;
    padding: 10px 10px;
    background-color: #E8E8E8;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 10px;
    span {
        font-size: 14px;
        margin: 10px 0px 10px 0px;
    }
`
export const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
        width: 100px;
        border-radius: 20px;
        background-color: #C4C4C4;
        :hover{
            background-color: #929292;
        }
    }
`
export const ButtonResult = styled.div`
    display: flex;
    margin: auto;
    margin-bottom: 20px;
    span {
        font-size: 12px;
    }
`