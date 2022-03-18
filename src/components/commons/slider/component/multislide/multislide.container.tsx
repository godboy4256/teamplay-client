import Head from "next/head";
import Slider from "react-slick";
import SquareTag from "../../../tags/commons/squareTag";
import { v4 as uuidv4 } from "uuid";
import slides from "../../../../../commons/json/slideList.json"
import * as S from "./multislide.styles";

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
                        slides.multiList.map(el => {
                            return <S.MultiSlideWrapper key={uuidv4()}>
                                <S.MultiSlideItem >
                                    <S.MultiSlideTop>
                                        <img src={el.image} alt={el.projectTitle} />
                                        <div>
                                            <div>{el.dDay}</div>
                                            <img src="../img/like.svg" alt="like icon" />
                                        </div>
                                    </S.MultiSlideTop>
                                    <S.MultiSlideBottom>
                                        <h3>{el.projectTitle}</h3>
                                        <S.MultiTagBox>
                                            {
                                                el.topics.map(it => {
                                                    return <SquareTag
                                                        key={uuidv4()}
                                                        size={8}
                                                        name={it}
                                                    />
                                                })
                                            }
                                        </S.MultiTagBox>
                                        <S.MemberCount>
                                            <img src="../img/members.svg" alt="members count iocn" />
                                            <span>{el.members}</span>
                                        </S.MemberCount>
                                    </S.MultiSlideBottom>
                                </S.MultiSlideItem>
                            </S.MultiSlideWrapper>
                        })
                    }
                </Slider>
            </S.MultiSlideBox>
        </>
    );
}
