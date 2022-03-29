import Head from "next/head";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import slides from "../../../../../commons/json/mainslideList.json"
import * as S from "./mainslide.styl";


export default function MainSlide() {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Head>
            </Head>
            <S.MainSliderStyle>
                <Slider {...settings}>
                   {
                        slides.slideList.map((el: any) => {
                            return <S.MainSlideBox key={uuidv4()}>
                                <S.MainSlideContents>
                                    <div>
                                        <span>{el.topics}</span>
                                        <h2>{el.mainTitle}</h2>
                                        <h3>{el.subTitle}</h3>
                                    </div>
                                </S.MainSlideContents>
                            </S.MainSlideBox>
                        })
                    }
                </Slider>
            </S.MainSliderStyle>
        </>
    );
}
