import styled from "@emotion/styled";
// import { ISideHiddenSearchBar } from "./recruit.presenter";

export const SearchBarWrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    
    /* z-index: 1;
    position: relative; */
`

export const SearchBar = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;

    @media (min-width: 1200px) {
        border-bottom: 1px solid #ccc;
    }

    @keyframes present {
        from {
            width: 20%;
            border: none;
        }
        to {
            width: 30%;
            border: 1px solid black;
        }
    }
    @keyframes disappear {
        from {
            width: 30%;
            border: 1px solid black;
        }
        to {
            width: 20%;
            border: none;
        }
    }
`

export const SearchInputBar = styled.div`
    width: 80%;
    
    display: flex;
    align-items: center;
    padding: 5px 0px 5px 15px;
    

    border: 1px solid #999999;
    border-radius: 20px;

    input{
        font-size: 12px;
        color: #999999;
    }

    img{
        padding-right: 10px;
    }
`

// export const HiddenSearchBar = styled.div`
//     z-index: 2;
//     position: absolute;
//     left: 10px;

//     right: ${(props:ISideHiddenSearchBar) => `${props.area}vw`};
//     transition: all 0.3s;
// `

export const RecruitTop = styled.div`
    width: 100%;
`
export const Contents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: 900;
    padding: 24px 0 15px;
    & > h3 {
        font-size: 20px;
        display: flex;
        align-items: center;
    }
    & > h3 > img {
        margin-left: 5px;
    }
`

export const RecruitBottom = styled.div``
