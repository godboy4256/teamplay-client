import * as C from "./chattingDetailPropose.styles"

export default function ChattingDetailProposeUI(){

    return(
        <C.ContentsBox>
            <C.Propose>
                <span>
                    안녕하세요! 개발자 제이든입니다.
                </span>
                <span>
                    teamplay 프로젝트에 참여를 수락하시겠습니까?
                </span>
                <C.Button>
                    <button>네</button>
                    <button>아니오</button>
                </C.Button>
            </C.Propose>
            <C.ButtonResult>
                <span>teamplay 참여를 수락하셨습니다.</span>
            </C.ButtonResult>
        </C.ContentsBox>
    )
}