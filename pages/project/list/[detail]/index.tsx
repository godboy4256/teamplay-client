import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchProjectArgs,
} from "../../../../src/commons/types/generated/types";

const FETCH_PROJECTS = gql`
  query fetchProject($projectId: String!) {
    fetchProject(projectId: $projectId) {
      id
      name
      imgUrl
      recruitDate
    }
  }
`;

export default function ProjectDetail() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchProject">,
    IQueryFetchProjectArgs
  >(FETCH_PROJECTS, {
    variables: {
      projectId: String(router.query.detail),
    },
  });
  data && console.log(data);
  return <div>디테일 페이지</div>;
}
