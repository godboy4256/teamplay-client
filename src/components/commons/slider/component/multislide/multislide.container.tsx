import Head from "next/head";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import * as S from "./multislide.styles";
import ProjectCard from "../../../../units/project/projectCard/projectCard";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProjectsArgs,
} from "../../../../../commons/types/generated/types";

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

export default function MultiSlide(props: any) {
  const { data } = useQuery<
    Pick<IQuery, "fetchProjects">,
    IQueryFetchProjectsArgs
  >(FETCH_PROJECTS, {
    variables: {
      page: 1,
    },
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <S.MultiSlideBox>
        <Slider {...settings}>
          {data?.fetchProjects.map((el) => {
            return (
              <S.MultiSlideWrapper key={uuidv4()}>
                <S.MultiSlideItem>
                  <ProjectCard
                    imgUrl={el.imgUrl}
                    name={el.name}
                    recruitDate={el.recruitDate}
                    onDetail={() => {}}
                  />
                </S.MultiSlideItem>
              </S.MultiSlideWrapper>
            );
          })}
        </Slider>
      </S.MultiSlideBox>
    </>
  );
}
