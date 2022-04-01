import { gql, useQuery } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchProjectArgs,
} from "../../../../commons/types/generated/types";
import PreviewProjectUI from "./previewProject.presenter";

interface PropsPreviewProject {
  data?: Pick<IQuery, "fetchProject">;
  setDetailModal: Dispatch<SetStateAction<boolean>>;
  detailId: string;
}

const FETCH_PROJECT = gql`
  query fetchProject($projectId: String!) {
    fetchProject(projectId: $projectId) {
      id
      name
      teamname
      intro
      recruitDate
      imgUrl
      description
      method
      type {
        name
      }
    }
  }
`;

export default function PreviewProject(props: PropsPreviewProject) {
  const { data } = useQuery<
    Pick<IQuery, "fetchProject">,
    IQueryFetchProjectArgs
  >(FETCH_PROJECT, {
    variables: {
      projectId: props.detailId,
    },
  });

  return <PreviewProjectUI data={data} setDetailModal={props.setDetailModal} />;
}
