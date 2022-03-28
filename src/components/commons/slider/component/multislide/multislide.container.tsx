import Head from "next/head";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import * as S from "./multislide.styles";
import projectListDummy from '../../../../../commons/json/projetList.json'
import ProjectCard from "../../../../units/project/projectCard/projectCard";

export default function MultiSlide(props: any) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
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
                    {
                        projectListDummy.projectList.map(el => {
                            return <S.MultiSlideWrapper key={uuidv4()}>
                                <S.MultiSlideItem >
                                  <ProjectCard 
                                    imgUrl={el.imgUrl}
                                    name={el.name}
                                    types={el.types}
                                    redruitDate={el.redruitDate}
                                    member={el.member}
                                  /> 
                                </S.MultiSlideItem>
                            </S.MultiSlideWrapper>
                        })
                    }
                </Slider>
            </S.MultiSlideBox>
        </>
    );
}
