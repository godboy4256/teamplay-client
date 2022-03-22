import * as S from "../projectManage.styles";

export default function TodoProgress() {
    return (
        <S.TodoList>
        <S.Todo>
        <S.TodoInfos>
            <div>
                <span>기획</span>
                <span>D-4</span>
            </div>
            <input type="checkbox" />
        </S.TodoInfos> 
        <S.TodoLimitDescription>웹 기획하기</S.TodoLimitDescription>
        <S.TodoLimitTime>2022년 3월 22일까지</S.TodoLimitTime>
        <S.TodoWorker align="right">
           <li>지호</li>
           <li>제이든</li>
        </S.TodoWorker>
    </S.Todo>
    <S.Todo>
        <S.TodoInfos>
            <div>
                <span>디자인</span>
                <span>D-4</span>
            </div>
            <input type="checkbox" />
        </S.TodoInfos> 
        <S.TodoLimitDescription>웹 디자인하기</S.TodoLimitDescription>
        <S.TodoLimitTime>2022년 3월 22일까지</S.TodoLimitTime>
        <S.TodoWorker align="right">
           <li>지호</li>
           <li>제이든</li>
        </S.TodoWorker>
    </S.Todo>
    <S.Todo>
        <S.TodoInfos>
            <div>
                <span>개발</span>
                <span>D-4</span>
            </div>
            <input type="checkbox" />
        </S.TodoInfos> 
        <S.TodoLimitDescription>웹 개발하기</S.TodoLimitDescription>
        <S.TodoLimitTime>2022년 3월 22일까지</S.TodoLimitTime>
        <S.TodoWorker align="right">
           <li>지호</li>
           <li>제이든</li>
        </S.TodoWorker>
    </S.Todo>
</S.TodoList> 
    )
}