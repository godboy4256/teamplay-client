import SquareTag from "../../tags/commons/squareTag";
import * as S from "./previewProject.styles";
import SubmitButton from "../../inputs/component/submitbutton/submit.container";
import { IQuery } from "../../../../commons/types/generated/types";
import { Dispatch, SetStateAction } from "react";
import {
  ProjectInfoKey,
  ProjectInfoValue,
} from "../../../units/project/management/projectManage.styles";
import { v4 as uuidv4 } from "uuid";

interface PropsPreviewProject {
  data?: Pick<IQuery, "fetchProject">;
  setDetailModal: Dispatch<SetStateAction<boolean>>;
}

export default function PreviewProjectUI(props: PropsPreviewProject) {
  const xmasDay: Date | null = props.data?.fetchProject.recruitDate
    ? new Date(props.data?.fetchProject.recruitDate)
    : null;
  const now: Date | null = new Date();
  const gap = Number(xmasDay) - Number(now);
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));

  return (
    <S.Wrapper id="detail__modal">
      <S.Modal>
        <S.ImgBox>
          {props.data?.fetchProject.imgUrl &&
          !props.data?.fetchProject.imgUrl.includes(
            "cdn-cashy-static-assets.lucidchart.com/"
          ) ? (
            <S.Img
              src={`https://storage.googleapis.com/${props.data?.fetchProject.imgUrl}`}
              alt={props.data?.fetchProject.name}
            />
          ) : (
            <S.Img src={props.data?.fetchProject.imgUrl} />
          )}
          <S.OffButton
            onClick={() => {
              props.setDetailModal(false);
              document
                .querySelector("#__next")
                ?.classList.remove("projectdetalon");
            }}
          >
            <S.Img
              src="/img/down-arrow.svg"
              className="Xmark"
              alt="down-arrow"
            />
          </S.OffButton>
        </S.ImgBox>
        <S.TitleBox>
          <div>
            <SquareTag
              bgColor={day <= 0 ? "#ccc" : "#3894FF"}
              size={1}
              name={day <= 0 ? "마감" : `D-${day}`}
            />
            <S.Func>
              <img src="/img/preview/Heart.svg" />
            </S.Func>
          </div>
          <S.Title>
            <span>{props.data?.fetchProject.name}</span>
          </S.Title>
          <S.Remarks>
            <span>{props.data?.fetchProject.intro}</span>
          </S.Remarks>
          <S.TagBox>
            <SquareTag name="금융" size={1} bgColor="#ccc" />
          </S.TagBox>
        </S.TitleBox>
        <S.ProjectListInfo>
          <li>
            <ProjectInfoKey>팀장</ProjectInfoKey>
            <ProjectInfoValue>제이든</ProjectInfoValue>
          </li>
          <li>
            <ProjectInfoKey>팀원</ProjectInfoKey>
            <ProjectInfoValue>지호, 마이클, 톰, 민수</ProjectInfoValue>
          </li>
          <li>
            <ProjectInfoKey>활동 지역</ProjectInfoKey>
            <ProjectInfoValue>서울 강남구</ProjectInfoValue>
          </li>
        </S.ProjectListInfo>
        <S.TeamInfoBox>
          <S.InfoName>2명 구인 중</S.InfoName>
          <S.WantedBox>
            {new Array(2).fill(1).map((_) => {
              return (
                <S.ProfileBox key={uuidv4()}>
                  <div>
                    <img src="/img/preview/user1.png" />
                    <div>UX 디자이너</div>
                  </div>
                  <div>
                    <span>1</span>명 모집중
                  </div>
                </S.ProfileBox>
              );
            })}
          </S.WantedBox>
        </S.TeamInfoBox>
        <S.DescriptionBox>
          <h3>상세 설명</h3>
          <div>{props.data?.fetchProject.description}</div>
        </S.DescriptionBox>
        <S.SubmitBox>
          <SubmitButton btnvalue="팀플 참여하기" />
        </S.SubmitBox>
      </S.Modal>
    </S.Wrapper>
  );
}
