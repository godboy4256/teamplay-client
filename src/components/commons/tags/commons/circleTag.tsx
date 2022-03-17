import styled from '@emotion/styled'

interface IPropsCircleTag {
    name: string;
    size: number;
    color: string;
}
interface IPropsContents {
    size: number;
}

interface IPropsWrapper {
    color: string;
}

const Wrapper = styled.div`
    display: inline;

    background: ${(props: IPropsWrapper) => `${props.color}`};
    border-radius: 12px;

    padding: 2px 10px;
    margin-right: 10px;
`

const Contents = styled.span`
   font-size: ${(props: IPropsContents) => `${props.size}px`};
   color: #FFFFFF;
`

export default function CircleTag(props: IPropsCircleTag) {

    return (
        <Wrapper color={props.color}>
            <Contents size={props.size}>{props.name}</Contents>
        </Wrapper>
    )
}