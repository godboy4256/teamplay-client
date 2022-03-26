import styled from "@emotion/styled";
import { Label } from "../../commons/styles";

const TypingInputStyle = styled.div`
    display: flex;
    flex-direction: column;
`

const TextInput = styled.input`
    border-bottom: 1px solid #C4C4C4;
    padding-bottom: 6px;
    &::placeholder{
        font-size: 14px;
        color:#999;
        font-weight: 600;
    }
`

interface IPropsTypingInput{
    label:string
    type:string
    placeholder:string
}

export default function TypingInput(props: IPropsTypingInput) {
    return (
        <TypingInputStyle>
            <Label>{props.label}</Label>
            <TextInput type={props.type} placeholder={props.placeholder} />
        </TypingInputStyle>
    )
}