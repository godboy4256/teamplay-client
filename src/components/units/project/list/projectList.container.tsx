import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProjectListUI from "./projectList.presenter";

const FETCH_PROJECTS = gql`
  query fetchProjects($page: Float!) {
    fetchProjects(page: $page) {
      id
      name
      imgUrl
      recruitDate
    }
  }
`;

export default function ProjectList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_PROJECTS, {
    variables: {
      page: 1,
    },
  });
  const onDetail = (e) => {
    e.preventDefault();
    router.push(`/project/list/${e.currentTarget.id}`);
  };
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchProjects.length / 12) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchProjects)
          return { fetchProjects: [...prev.fetchProjects] };

        return {
          fetchProjects: [
            ...prev.fetchProjects,
            ...fetchMoreResult.fetchProjects,
          ],
        };
      },
    });
  };

  return (
    <ProjectListUI data={data} onLoadMore={onLoadMore} onDetail={onDetail} />
  );
}
