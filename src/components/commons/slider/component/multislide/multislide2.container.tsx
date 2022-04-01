import Head from "next/head";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import userListDummy from "../../../../../commons/json/userList.json";
import PropsProfileCardSlide from "../../../profileCard/profileCardSlide";
import * as S from "./multislide.styles";

export default function MultiSlide2() {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
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
          {userListDummy.userList.map((el) => {
            return (
              <S.MultiSlideWrapper key={uuidv4()} style={{ width: 200 }}>
                <S.MultiSlideItem>
                  <PropsProfileCardSlide
                    img={el.img}
                    name={el.name}
                    position={el.position}
                    tendency={el.tendency}
                    fontSize={0.571}
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
