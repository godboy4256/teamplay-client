import styled from "@emotion/styled";

const ButtonStyle = styled.button`
    padding: 6px 11px;
    background-color:#3894FF;
    color: #fff;
    border-radius:8px;
    font-size: 14px;
`

export default function ContentsButton(props: any) {
    return (
        <ButtonStyle
            onClick={props.onClickEvent}
        >
            {props.btnvalue}
        </ButtonStyle>
    )
}