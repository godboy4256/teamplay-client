import styled from "@emotion/styled";
import { useState } from "react";

interface IProps {
    children: any;
    onClick: () => void;
    check: boolean;
}


const TagButtonStyle = styled.button`
    border-radius: 20px;
    border:1px solid #C4C4C4;
    background-color: ${(props: IProps) => props.check ? "#C4C4C4" : "#fff"};
    color: ${(props: IProps) => props.check ? "#fff" : "#C4C4C4"};;
    padding: 6px 11px;
    font-size: 14px;
`

export default function Tag(props: any) {
    const [check, setCheck] = useState<boolean>(false)
    const onClickTagButton = () => {
        setCheck(prev => !prev)
    }
    return (
        <TagButtonStyle
            onClick={onClickTagButton}
            check={check}
        >
            {props.tagValue}
        </TagButtonStyle>
    )
}