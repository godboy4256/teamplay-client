import * as C from "./chattingList.styles"

export default function ChattingListUI(){

    return(
        <C.Wrapper>
            <C.Header>
                <C.Arrow> ◁ </C.Arrow>
                <C.Name>메세지</C.Name>
                <C.Setting>⛓</C.Setting>
            </C.Header>
            <C.ListBox>
                <C.List>
                    <C.Avatar src="/img/chatting/avatar.png"/>
                    <C.InfoBox>
                        <C.InfoHeader>
                            <C.InfoUser>제이든</C.InfoUser>
                            <C.InfoCreatedAt>10:10PM</C.InfoCreatedAt>
                        </C.InfoHeader>
                        <C.InfoContents>안녕하세요 개발자 제이든입니다😀</C.InfoContents>
                    </C.InfoBox>
                </C.List>
                <C.Line></C.Line>
                <C.List>
                    <C.Avatar src="/img/chatting/avatar.png"/>
                    <C.InfoBox>
                        <C.InfoHeader>
                            <C.InfoUser>제이든</C.InfoUser>
                            <C.InfoCreatedAt>10:10PM</C.InfoCreatedAt>
                        </C.InfoHeader>
                        <C.InfoContents>안녕하세요 개발자 제이든입니다😀</C.InfoContents>
                    </C.InfoBox>
                </C.List>
            </C.ListBox>
        </C.Wrapper>
    )
}