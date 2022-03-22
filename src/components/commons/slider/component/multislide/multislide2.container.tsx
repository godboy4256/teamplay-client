import Head from "next/head";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import slides from "../../../../../commons/json/slideList.json"
import * as S from "./multislide.styles";
import CircleTag from "../../../tags/commons/circleTag";

export default function MultiSlide2(props: any) {
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
                        slides.multiList2.map(el => {
                            return <S.MultiSlideWrapper key={uuidv4()}>
                                <S.MultiSlideItem>
                                    <S.MultiSlideTop2>
                                        <S.Like>
                                            <img src="/img/like2.svg" alt="like icon" />
                                        </S.Like>
                                        <S.ImgBox>
                                            <img src={el.profile} alt={el.name} />
                                        </S.ImgBox>
                                        <h3>{el.name}</h3>
                                        <h4>{el.position}</h4>
                                    </S.MultiSlideTop2>
                                    <S.MultiSlideBottom2>
                                        {
                                            el.topics.map(it => {
                                                return <CircleTag
                                                    key={uuidv4()}
                                                    size={8}
                                                    name={it.style}
                                                    color={it.color}
                                                    margin="0"
                                                />
                                            })
                                        }
                                    </S.MultiSlideBottom2>
                                </S.MultiSlideItem>
                            </S.MultiSlideWrapper>
                        })
                    }
                </Slider>
            </S.MultiSlideBox>
        </>
    );
}
