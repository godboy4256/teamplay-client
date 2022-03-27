import CircleTag from "../../../../commons/tags/commons/circleTag";
import SquareTag from "../../../../commons/tags/commons/squareTag";
import { v4 as uuidv4 } from "uuid";
import * as S from "../projectManage.styles";

export default function TodoProgress() {
    return (
        <S.TodoList>
        <S.Todo>
        <S.TodoInfos>
            <div>
                <CircleTag 
                    name="D-4"
                    size={0.514}
                    bgColor="#999"
                    margin={10}
                />
                <SquareTag 
                    name="기획"
                    size={0.514}
                    bgColor="#c4c4c4"
                />
            </div>
            <input type="checkbox" />
        </S.TodoInfos> 
        <S.TodoLimitDescription>웹 기획하기</S.TodoLimitDescription>
        <S.TodoLimitTime>2022년 3월 22일까지</S.TodoLimitTime>
        <S.TodoWorker align="right">
            {
               new Array(2).fill(1).map((_) => {
                   return <li key={uuidv4()}>
                       <img src="/img/user01.png" alt="user img"/>
                   </li>
               })
            }
        </S.TodoWorker>
    </S.Todo>
    <S.Todo>
        <S.TodoInfos>
            <div>
                <CircleTag 
                    name="D-4"
                    size={0.514}
                    bgColor="#999"
                    margin={10}
                />
                <SquareTag 
                    name="기획"
                    size={0.514}
                    bgColor="#c4c4c4"
                />
            </div>
            <input type="checkbox" />
        </S.TodoInfos> 
        <S.TodoLimitDescription>웹 디자인하기</S.TodoLimitDescription>
        <S.TodoLimitTime>2022년 3월 22일까지</S.TodoLimitTime>
        <S.TodoWorker align="right">
            {
               new Array(2).fill(1).map((_) => {
                   return <li key={uuidv4()}>
                       <img src="/img/user01.png" alt="user img"/>
                   </li>
               })
            }
        </S.TodoWorker>
    </S.Todo>
    <S.Todo>
        <S.TodoInfos>
            <div>
                <CircleTag 
                    name="D-4"
                    size={0.514}
                    bgColor="#999"
                    margin={10}
                />
                <SquareTag 
                    name="기획"
                    size={0.514}
                    bgColor="#c4c4c4"
                />
            </div>
            <input type="checkbox" />
        </S.TodoInfos> 
        <S.TodoLimitDescription>웹 개발하기</S.TodoLimitDescription>
        <S.TodoLimitTime>2022년 3월 22일까지</S.TodoLimitTime>
        <S.TodoWorker align="right">
           {
               new Array(2).fill(1).map((_) => {
                   return <li key={uuidv4()}>
                       <img src="/img/user01.png" alt="user img"/>
                   </li>
               })
           }
        </S.TodoWorker>
    </S.Todo>
</S.TodoList> 
    )
}