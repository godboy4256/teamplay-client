import styled from "@emotion/styled";

export const ProjectListStyle = styled.div`

`

export const ProjectListBox = styled.ul`

`

export const ProjectListItem = styled.li`
    border-radius: 15px;
    margin-bottom: 25px;
    overflow:hidden;
    background-color: #EAEAEA;
    color: #777;
`

export const ProjectListItemTop = styled.div`
    width:100%;
    background-color: #c4c4c4;
    display: flex;
    justify-content: space-between;
    align-items :center;
    padding:15px 13px 100px;
    color: #fff;
    & span{
        display: inline-block;
        background-color:#777;
        padding:5px 4px;
    }
`

export const ProjectListItemBottom = styled.div`
    padding:15px 13px;
    & > h3{
        padding-bottom:5px;
    }
`

export const ProjectMembers = styled.div`
    padding:10px 0 0;
    display: flex;
    align-items: center;
    font-size: 13px;
`

