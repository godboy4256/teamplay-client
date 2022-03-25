import { Label } from "../../commons/styles";
import styled from "@emotion/styled";

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

export default function Date(props: any) {
    return (
        <div>
            <Label>{props.label}</Label>
            <DateStyle type="date" />
        </div>
    )
}