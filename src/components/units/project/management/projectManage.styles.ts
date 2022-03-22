import styled from "@emotion/styled";

interface IPropsTodoWorker{
    align : string
}


export const ProjectManageStyle = styled.div`
  
`

export const TodoInfos = styled.div`
    display: flex;
    padding-bottom: 10px;
    justify-content: space-between;
    & > div{
        display: flex;
    }
    & span{
        display: block;
        font-size: 10px;
        background-color: #ccc;
        border-radius: 5px;
        color: #fff;
        padding: 5px;
        margin-right: 10px;
    }
`

export const TodoLimitDescription = styled.div`
    background-color: #ccc;
    font-size: 10px;
    padding: 10px;
    margin-bottom: 10px;
    color:#fff;
`

export const TodoLimitTime = styled.div`
    font-size: 8px;
    color: #ccc;
    margin-bottom: 10px;
`
export const DoneList = styled.div`
    font-size: 8px;
    color: #ccc;
    margin-bottom: 10px;
`

export const TodoList = styled.div`
    
`

export const ProjectDetail = styled.div`
    padding-top: 30px;
    color:#fff;
    font-size: 10px;
`

export const ProjectTodoNavTab = styled.ul`
    display: flex;
    padding: 5px 0;
    & >li{
        width: 50%;
        text-align: center;
        font-family:normal;
        cursor: pointer;
        padding: 10px 0;
        font-size: 10px;
        &:first-child{
            border-right:1px solid #ccc;
        }
    }
`

export const TodoWorker = styled.ul`
    display: flex;
    justify-content: ${(props:IPropsTodoWorker) => props.align === "left" ? "flex-start" : "flex-end"};
    & > li{
        margin: ${(props:IPropsTodoWorker) => props.align === "left" ? "0 10px 0 0" : "0 0 0 10px"};
        font-size: 8px;
        width: 30px;
        height: 30px;
        color:#fff;
        display: flex;
        background-color: #ccc;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
    }
`

export const Todo = styled.div`
    border:1px solid #ccc;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 15px;
`

export const ProjectManageTop = styled.div`
    border-bottom:1px solid #ccc;
      & > h3{
        font-size: 25px;
        padding-bottom: 20px;
    }
    & > h4{
        font-size: 12px;
        padding-bottom: 20px;
    }
    & > ul{
       display: flex;
    }
`

export const ProjectManageContentsTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding:20px 0;
`


export const ProjectManaBoard = styled.ul`
    & > li{
        display: flex;
        flex-direction: column;
        background-color:#ccc;
        border-radius: 12px;
        padding:15px 13px;
        margin-bottom: 15px;
        font-size:12px;
        cursor: pointer;
        &:hover{
            & h4{
                text-decoration: underline;
            }
        }
        & > div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            & time{
                display: block;
                color: #fff;
                margin-right: 10px;
            }
            & h4{
                color: #777;
            }
        }

        & > div > div{
            display: flex;
        }
    }
`



export const ProjectListInfo = styled.div`
    padding-bottom: 30px;
    & > li{
        display: flex;
        width: 100%;
        padding-bottom: 10px;
        align-items: center;
        font-size: 14px;
        &:last-child{
            padding-bottom: 0;
        }
    }
`

export const ProjectStatusBox = styled.div`
    width: 100%;
    background-color: #ccc;
    border-radius: 30px;
`

export const ProjectStatus = styled.div`
    background-color: #777;
    border-radius: 30px;
    font-size: 8px;
    width: 23%;
    padding:3px 5px;
`

export const ProjectInfoKey = styled.div`
    width: 30%;
    font-weight: 900;
    color: #000;
`

export const ProjectInfoValue = styled.div`
    width: 70%;
    color: #ccc;
`

export const ProjectManageImg = styled.div`
    background-color: #ccc;
    padding:60px 20px 250px;
    display: flex;
    justify-content: space-between;
`