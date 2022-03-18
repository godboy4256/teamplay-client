import Head from "next/head";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import slides from "../../../../../commons/json/slideList.json"
import * as S from "./oneslide.styles";

export default function OneSlide(props: any) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: props.slideToShow,
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
            <S.SliderStyle>
                <Slider {...settings}>
                    {
                        slides.slideList.map((el: any) => {
                            console.log(el)
                            return <S.OneSlideBox key={uuidv4()}>
                                <S.OneSlideContents>
                                    <div>
                                        {
                                            el.topics.map((it: any) => {
                                                return <S.OneSlideTopic key={uuidv4()}>{it}</S.OneSlideTopic>
                                            })
                                        }
                                        <h2>{el.mainTitle}</h2>
                                        <h3>{el.subTitle}</h3>
                                    </div>
                                    {/* <img src={el.images} alt={el.mainTitle} /> */}
                                </S.OneSlideContents>
                            </S.OneSlideBox>
                        })
                    }
                </Slider>
            </S.SliderStyle>
        </>
    );
}
