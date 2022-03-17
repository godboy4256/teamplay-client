import * as C from "./chattingDetail.styles"

export default function ChattingDetailUI(){

    return(
        <C.Wrapper>
            <C.Header>
                <C.Arrow> ◁ </C.Arrow>
                <C.Name>제이든</C.Name>
                <C.Setting>⛓</C.Setting>
            </C.Header>
            <C.ContentsBox>
                <C.Contents>
                    <C.Receive>
                        <span>안녕하세요! 개발자 제이든입니다.</span>
                    </C.Receive>
                </C.Contents>
                <C.SendContents>
                    <C.Send>
                        <span>네 안녕하세요!</span>
                    </C.Send>
                </C.SendContents>
                <C.SendContents>
                    <C.Send>
                        <span>teamplay 프로젝트에 참여 가능하신가요?</span>
                    </C.Send>
                </C.SendContents>
                <C.Contents>
                    <C.Receive>
                        <span>네!👍</span>
                    </C.Receive>
                </C.Contents>
                <C.Bottom>
                    <C.InputImgBox>
                            <C.InputImg src="../img/chatting/Rectangle.svg"/>
                        <C.CameraImgBox>
                            <C.CamerImg src="../img/chatting/camera.svg"/>
                        </C.CameraImgBox>
                        <C.VectorImgBox>
                            <C.VectorImg src="../img/chatting/Vector.svg"/>
                        </C.VectorImgBox>
                    </C.InputImgBox>
                    <C.SendButtonImg src="../img/chatting/sendButton.svg"/>      
                </C.Bottom>
            </C.ContentsBox>
        </C.Wrapper>
    )
}