import styled from "@emotion/styled";

const ButtonStyle = styled.button`
    width: 100%;
    padding: 13px 0;
    background-color:#a7a7a7;
    color: #dedede;
    border-radius:26px;
    font-size: 28px;
    margin:40px 0 15px;
    margin-right:8px;
    font-family: normal;
`

export default function SubmitButton(props: any) {
    return (
        <ButtonStyle>
            {props.btnvalue}
        </ButtonStyle>
    )
}