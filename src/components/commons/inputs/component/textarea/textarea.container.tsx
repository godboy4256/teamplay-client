import styled from "@emotion/styled";
import { Label } from "../../commons/styles";

const TextAreaStyle = styled.textarea`
    border: 1px solid #999;
    width:100%;
    height:210px;
    border-radius: 12px;
    padding:10px;
`

export default function TextArea(props: any) {
    return (
        <>
            <Label>{props.label}</Label>
            <TextAreaStyle></TextAreaStyle>
        </>
    )
}