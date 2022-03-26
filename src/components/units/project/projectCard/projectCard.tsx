import * as S from "../list/projectList.styles";
import CircleTag from "../../../commons/tags/commons/circleTag";
import { v4 as uuidv4 } from "uuid";

interface IPropsProjectCard{
    imgUrl:string,
    name:string,
    member:string,
    types:string,
    redruitDate:string
}

export default function ProjectCard(props:IPropsProjectCard) {
    return (
            <S.ProjectListStyle>
                <S.ProjectListItem>
                    <S.ProjectListItemTop>
                        <span>{props.redruitDate}</span>
                        <img src="../img/like.svg" alt="like icon" />
                        <img src={props.imgUrl} alt={props.name}/>
                    </S.ProjectListItemTop>
                    <S.ProjectListItemBottom>
                        <h3>{props.name}</h3>
                        <CircleTag
                            key={uuidv4()}
                            size={0.571}
                            name={props.types}
                            bgColor="#CCC"
                            margin={0}
                        />
                        <S.ProjectMembers>
                            <img src="../img/big_member.svg" alt="members icon" />
                            <span>{props.member}</span>
                        </S.ProjectMembers>
                    </S.ProjectListItemBottom>
                </S.ProjectListItem>
            </S.ProjectListStyle>
    );
}
