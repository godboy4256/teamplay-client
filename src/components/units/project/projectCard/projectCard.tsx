import CircleTag from "../../../commons/tags/commons/circleTag";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

const ProjectListItem = styled.div`
    @media (min-width: 1200px) {
            width: 25%;
            float: left;
            padding: 5px 10px;
        & > div{
            border-radius: 12px;
            margin-bottom: 25px;
            overflow:hidden;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
        }
    }
`

const ProjectListItemTop = styled.div`
    width:100%;
    height: 7.813rem;
    padding:15px 13px 100px;
    color: #fff;
    position: relative;
    overflow: hidden;
    & >img{
        width: 100%;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    };
    & >div{
        padding:15px 13px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top:0;
        left:0;
        z-index:1;
        & > span{
            display: inline-block;
            background-color: #595959;
            border-radius: 0.75rem;
            padding: 5px 10px;
            color:#fff;
        }
    }
`

const ProjectListItemBottom = styled.div`
    padding:15px 13px;
    & > h3{
        padding-bottom:7px;
    }
`

const ProjectMembers = styled.div`
    margin-top: 7px;
    display: flex;
    align-items: center;
    font-size: 13px;
`

interface IPropsProjectCard{
    imgUrl:string
    name:string | undefined
    types:string
    redruitDate:string
    member?:string
}

export default function ProjectCard(props:IPropsProjectCard) {
    return (
                <ProjectListItem>
                    <div>
                    <ProjectListItemTop>
                        <div>
                            <span>{props.redruitDate}</span>
                            <img src="../img/like.svg" alt="like icon" />
                        </div>
                        <img src={props.imgUrl} alt={props.name}/>
                    </ProjectListItemTop>
                    <ProjectListItemBottom>
                        <h3>{props.name}</h3>
                        <CircleTag
                            key={uuidv4()}
                            size={0.571}
                            name={props.types}
                            bgColor="#C4C4C4"
                            margin={0}
                        />
                        <ProjectMembers>
                            <img src="../img/big_member.svg" alt="members icon" />
                            <span>{props.member}</span>
                        </ProjectMembers>
                    </ProjectListItemBottom>
                    </div>
                </ProjectListItem>
    );
}
