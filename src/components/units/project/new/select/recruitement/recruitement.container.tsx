import styled from "@emotion/styled";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProjectContext } from "../../projectNew.container";

interface IPropsRecruitmentList {
    el?: string
    index: number
}

const RecruitmentList = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    & div{
         display: flex;
         align-items: center;
    }
    & div > span{
         color: #3894FF
    }
    & .check__input{
        display: none;
    }
    & .check__label{
        display: block;
        border:1px solid #999;
        width: 15px;
        height: 15px;
        cursor: pointer;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.active:after{
            display: block;
            content: " ";
            width: 70%;
            height:70%;
            background-color: #3894FF;
            border-color: #fff;
        }
    }
`

const Personnel = styled.div`
    &>span{
        color:#3894FF
    }
    margin-right: 1.429rem;
`

export default function Recruitment(props: IPropsRecruitmentList) {

    const {
        position,
        postionInclueds,
        setPosition,
        setPostionInclueds,
        numbers
    } = useContext(ProjectContext)


    const onClickDelete = (target: string) => () => {
        if (setPosition && position && setPostionInclueds) {
            const a : any =position.filter((el: any) => {
                return el !== target
            })
            setPosition(a)
            postionInclueds && setPostionInclueds(postionInclueds.filter((el: string) => {
                return el !== target
            }))
        }
    }
    return (
        <RecruitmentList key={uuidv4()}>
            <div>{props.el}</div>
            <div>
                <Personnel><span>{numbers && numbers[props.index + 1]}</span> 명 모집</Personnel>
                {
                    props.el &&
                    <button onClick={onClickDelete(String(props.el))}>취소</button>
                }
            </div>
        </RecruitmentList>
    )
}