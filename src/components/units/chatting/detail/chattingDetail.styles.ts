import styled from '@emotion/styled';

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    font-size: 23px;
    padding: 0px 20px 0px 20px;
`
export const Arrow = styled.div``
export const Name = styled.div``
export const Setting = styled.div``

export const ContentsBox = styled.div`
    width: auto;
    padding: 0px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Contents = styled.div`
    width: auto;
    border-radius: 0px 24px 24px 24px;
    background-color: #999999;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
`

export const Receive = styled.div`
    padding: 10px 10px;
    span {
        font-size: 14px;
    }
`
export const SendContents = styled.div`
    width: auto;
    border-radius: 24px 0px 24px 24px;
    background-color: #3894FF;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-left: auto;
`
export const Send = styled.div`
    padding: 10px 10px;
    span{
        font-size: 14px;
    }
`
export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 200px;
`
export const InputImgBox = styled.div`
    position: relative;
`
export const CameraImgBox = styled.div`
    position: absolute;
    top: 11px;
    left: 15px;
`
export const VectorImgBox = styled.div`
    position: absolute;
    top: 5px;
    left: 50px;
`
// export const SendButtonImgBox = styled.div``
export const InputImg = styled.img``
export const CamerImg = styled.img``
export const VectorImg = styled.img``
export const SendButtonImg = styled.img``