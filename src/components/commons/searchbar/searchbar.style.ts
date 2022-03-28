import styled from "@emotion/styled";

export const SearchBarStyle = styled.div`
    width: 100%;
    padding:10px 0;
`

export const SearchBarTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    margin-bottom: 10px;
    @media (min-width: 1200px) {
        border-bottom: 1px solid #ccc;
    }
`

export const SearchBarBottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    & div> img{
        margin-left: 5px;
    }
`