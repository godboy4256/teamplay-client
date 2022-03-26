import SearchBar from "../../../commons/searchbar/searchbar.container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./projectList.styles";
import { Wrapper } from "../../../../commons/styles/commonStyls";
import CircleTag from "../../../commons/tags/commons/circleTag";
import WriteGoButton from "../../../commons/inputs/component/write_button/write_button";


export default function ProjectListUI() {

    return (
        <Wrapper paddingTop={0}>
            <SearchBar />
            <WriteGoButton />
            <S.ProjectListStyle>
                {
                    new Array(10).fill(1).map(_ => {
                        return <S.ProjectListItem key={uuidv4()}>
                            <S.ProjectListItemTop>
                                <span>D-4</span>
                                <img src="../img/like.svg" alt="like icon" />
                            </S.ProjectListItemTop>
                            <S.ProjectListItemBottom>
                                <h3>자율주행자동차 어플</h3>
                                <div>
                                    {
                                        new Array(2).fill(1).map(_ => {
                                            return <CircleTag
                                                key={uuidv4()}
                                                size={8}
                                                name="태그"
                                                bgColor="#CCC"
                                                margin={0}
                                            />
                                        })
                                    }
                                </div>
                                <S.ProjectMembers>
                                    <img src="../img/big_member.svg" alt="members icon" />
                                    <span>1/3</span>
                                </S.ProjectMembers>
                            </S.ProjectListItemBottom>
                        </S.ProjectListItem>
                    })
                }
            </S.ProjectListStyle>
        </Wrapper>
    );
};
