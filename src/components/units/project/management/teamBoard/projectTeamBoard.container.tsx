import { useState } from "react"
import * as S from "../projectManage.styles";

export default function ProjectTeamBoard() {
    const [detail,setDetail] = useState(false)
    const onClickDetail = () => {
        setDetail(prev => !prev)
    }
    return (
        <>
            <li onClick={onClickDetail}>
                <div>
                    <div>
                        <time>2022.3.15</time>
                        <h4>내일 7시에 회의합니다!</h4>
                    </div>
                    <button>
                        <img src="/img/contents_menu.svg" alt="contents menu"/>
                    </button>
                </div>
                {   
                    detail &&
                    <S.ProjectDetail>
                        패스트파이브에서 회의 있습니다... 늦으시면 벌금 백만원에 삼겹살 쏘세요~~
                    </S.ProjectDetail>
                }
            </li>
        </>
       
    )
}