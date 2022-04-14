import { Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsProjectListUI {
  data: Pick<IQuery, "fetchProjects">;
  onLoadMore: any;
  onDetail: (e: MouseEvent<HTMLDivElement>) => void;
  detailModal: boolean;
  setDetailModal: Dispatch<SetStateAction<boolean>>;
  detailId: string;
  fetchProjectCount?: number;
}
