import SearchBar from "../../../commons/searchbar/searchbar.container";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "../../../../commons/styles/commonStyls";
import WriteGoButton from "../../../commons/inputs/component/write_button/write_button";
import ProjectCard from "../projectCard/projectCard";
import * as S from "./projectList.styles";
import { IQuery } from "../../../../commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";

interface IPropsProjectListUI {
  data: Pick<IQuery, "fetchProjects">;
  onLoadMore: () => void;
}

export default function ProjectListUI(props: IPropsProjectListUI) {
  return (
    <Wrapper paddingTop={0}>
      <S.ProjectListTitle>모든 프로젝트</S.ProjectListTitle>
      <SearchBar />
      <WriteGoButton />
      <InfiniteScroll loadMore={props.onLoadMore} hasMore={true} pageStart={1}>
        <S.ProjectListBox>
          {props?.data &&
            props?.data.fetchProjects.map((el) => {
              return (
                <ProjectCard
                  key={uuidv4()}
                  id={el.id}
                  name={el.name}
                  imgUrl={el.imgUrl}
                  recruitDate={el.recruitDate}
                  onDetail={props.onDetail}
                />
              );
            })}
        </S.ProjectListBox>
      </InfiniteScroll>
    </Wrapper>
  );
}
