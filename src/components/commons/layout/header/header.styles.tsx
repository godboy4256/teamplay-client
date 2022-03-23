import styled from "@emotion/styled";


export const HeaderStyle = styled.header`
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
`

export const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
`

export const HeaderNav = styled.nav`
   & ul{
        display: flex;
   }
   & ul>li{
        margin-right: 39px;
        cursor: pointer;
        position: relative;
        padding: 12px 0;
   }
   & ul>li.nav__list.active__page{
       ::after{
        display:block;
        content: " ";
        width: 100%;
        height: 1px;
        background-color: #3894FF;
        position: absolute;
        bottom: -1px;
        left: 0;
       }
   }
   color: #9D9D9D;
`




export const Logo = styled.div`
    font-size: 17px;
    font-weight: 700;
    line-height: 1;
`

export const Setting = styled.div` 
    line-height: 0;
    & button{
        line-height: 0;
        margin-left: 7px;
    }
`
