import styled from "@emotion/styled";

interface IButtonStyleProps {
    which: any;
}

const ButtonStyle = styled.button`
    border: 1px solid #C4C4C4;
    padding: 6px 11px;
    background-color: ${(props: IButtonStyleProps) => props.which === "추가" ? "#C4C4C4" : props.which === "삭제" && "#fff"};
    color: ${(props: IButtonStyleProps) => props.which === "추가" ? "#fff" : props.which === "삭제" && "#C4C4C4"};
    border-radius:20px;
    font-size: 14px;
    margin-right:8px;
`

export default function ContentsButton(props: any) {
    return (
        <ButtonStyle
            which={props.btnvalue}
        >
            {props.btnvalue}
        </ButtonStyle>
    )
}