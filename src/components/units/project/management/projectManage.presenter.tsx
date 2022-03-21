import { v4 as uuidv4 } from "uuid";

export default function ProjectManageUI() {
    return (
        <div>
            <div>
                <img src="../img/pageback.svg" alt="page back location" />
                <img src="../img/contentsmenu.svg" alt="contents menu button" />
            </div>
            <div>
                <h3>자율주행자동차 어플</h3>
                <h4>long established fact that a reader will be distract</h4>
                <ul>
                    <li>태그</li>
                    <li>태그</li>
                    <li>태그</li>
                </ul>
                <ul>
                    <li>
                        <div>팀</div>
                        <div>코드 캠프 TOP</div>
                    </li>
                    <li>
                        <div>밋업 장소</div>
                        <div>코드 캠프 패스트파이브</div>
                    </li>
                    <li>
                        <div>진행 단계</div>
                        <div>
                            <div></div>
                            <div>23%</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div>
                    <h3>팀 프로필</h3>
                </div>
                <div>
                    <h3>팀 게시판</h3>
                    <img src="../img/plusicon.svg" alt="contents plus icon" />
                </div>
                <ul>
                    {
                        new Array(3).fill(1).map((_) => {
                            return <li key={uuidv4()}>
                                <div>
                                    <time>2022.3.15</time>
                                    <h4>내일 7시에 회의합니다!</h4>
                                </div>
                                <button></button>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div>
                <div>
                    <h3>To Do List</h3>
                    <img src="../img/plusicon.svg" alt="contents plus icon" />
                </div>
                <ul>
                    <li>
                        <span>웹 기획하기</span>
                        <input type="checkbox" />
                    </li>
                    <li>
                        <span>웹 디자인하기</span>
                        <input type="checkbox" />
                    </li>
                    <li>
                        <span>웹 퍼블리싱하기</span>
                        <input type="checkbox" />
                    </li>
                    <li>
                        <span>웹 개발하기</span>
                        <input type="checkbox" />
                    </li>
                    <li>
                        <span>웹 기획하기</span>
                        <input type="checkbox" />
                    </li>
                    <li>
                        <span>최종점검</span>
                        <input type="checkbox" />
                    </li>
                </ul>
            </div>
        </div>
    )
}