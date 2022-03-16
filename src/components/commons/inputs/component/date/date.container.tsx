import { Label } from "../../commons/styles";
import styled from "@emotion/styled";

const DateStyle = styled.input`
    width: 142px;
    border:1px solid #C4C4C4;
    color:#c4c4c4;
    font-size: 13px;
    padding: 13px 9px;
    border-radius: 5px;
    &::-webkit-calendar-picker-indicator {
        background-image: url("../images/date.svg");
    }   
    cursor: pointer;
`



export default function Date(props: any) {
    return (
        <>
            <Label>{props.label}</Label>
            <DateStyle type="date" />
        </>
    )
}