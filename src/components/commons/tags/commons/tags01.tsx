import styled from '@emotion/styled'

const Wrapper = styled.div`
    border: 1px solid black;
    border-radius: 15px;

    padding: 3px 10px;
    margin-right: 10px;

    span {
        font-size: 14px;
    }
`

interface IPropsTags01 {
    name: string;
}

export default function Tags01(props: IPropsTags01) {

    return (
        <Wrapper>
            <span>{props.name}</span>
        </Wrapper>
    )
}