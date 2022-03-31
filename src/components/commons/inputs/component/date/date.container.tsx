import { Label } from "../../commons/styles";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";

const DateStyle = styled.input`
    border:1px solid #999;
    color:#999;
    font-size: 13px;
    padding: 13px 9px;
    border-radius: 5px;
    &::-webkit-calendar-picker-indicator {
        background-image: url("/img/date.svg");
    }   
    cursor: pointer;
`

interface IPropsDate {
    label: string
    setValues?: Dispatch<SetStateAction<string>>
}

export default function DateInput(props: IPropsDate) {
    return (
        <div>
            <Label>{props.label}</Label>
            <DateStyle onChange={(e) => { props.setValues && props.setValues(e.target.value) }} type="date" />
        </div>
    )
}