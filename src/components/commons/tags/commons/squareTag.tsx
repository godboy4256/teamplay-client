import styled from "@emotion/styled";

interface IPropsSquareTag {
    name: string;
    size: number;
}
interface IPropsContents {
    size: number;
}

const Wrapper = styled.div`
    padding: 2px 10px;
    margin: 0px 10px 5px 0px;
    border-radius: 5px;
    background-color: #c4c4c4;
`
const Contents = styled.span`
   font-size: ${(props: IPropsContents) => `${props.size}px`};
   color: #FFFFFF;
`

export default function SquareTag(props: IPropsSquareTag) {

    return (
        <Wrapper>
            <Contents size={props.size}>{props.name}</Contents>
        </Wrapper>
    )
}