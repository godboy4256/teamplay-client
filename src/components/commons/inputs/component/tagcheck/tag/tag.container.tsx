import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

interface IPropsTagButton {
    tagValue: string;
    duplicate: string;
    onClickTagButton: MouseEventHandler<HTMLButtonElement>
    picks: Array<string>
}

interface IPropsTagButtonStyle {
    tagValue: string;
    picks: Array<string>
}


const TagButtonStyle = styled.button`
    border-radius: 20px;
    border: ${(props: IPropsTagButtonStyle) => props.picks.includes(props.tagValue) ? "1px solid #fff" : "1px solid #999"};;
    background-color :${(props: IPropsTagButtonStyle) => props.picks.includes(props.tagValue) ? "#3894FF" : "#fff"};
    color: ${(props: IPropsTagButtonStyle) => props.picks.includes(props.tagValue) ? "#fff" : "#999"};;
    padding: 6px 11px;
    font-size: 14px;
    transition: .4s;
    &.tag__list.active__list{
        background-color: #3894FF;
        border-color: #fff;
        color:#fff
    }
`

export default function Tag(props: IPropsTagButton) {
    return (
        <TagButtonStyle
            className="tag__list"
            onClick={props.onClickTagButton}
            picks={props.picks}
            tagValue={props.tagValue}
        >
            {props.tagValue}
        </TagButtonStyle>
    )
}