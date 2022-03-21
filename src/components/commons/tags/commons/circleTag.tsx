import styled from '@emotion/styled'

interface IPropsCircleTag {
    name: string;
    size: number;
    color: string;
    margin: string | null | undefined
}
interface IPropsContents {
    size: number;
}

interface IPropsWrapper {
    color: string;
    margin: string | null | undefined;
}


const CircleWrapper = styled.div`
    display: inline-block;
    background: ${(props: IPropsWrapper) => `${props.color}`};
    border-radius: 12px;
    padding: 4px 10px;
    margin: ${(props: IPropsWrapper) => `${props.margin}`};
`

const Contents = styled.span`
   font-size: ${(props: IPropsContents) => `${props.size}px`};
   color: #FFFFFF;
`

export default function CircleTag(props: IPropsCircleTag) {
    return (
        <CircleWrapper color={props.color} margin={props.margin}>
            <Contents size={props.size}>{props.name}</Contents>
        </CircleWrapper>
    )
}