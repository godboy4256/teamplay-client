import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import userListDummy from "../../../../../commons/json/userList.json";
import PropsProfileCardSlide from "../../../profileCard/profileCardSlide";
import * as S from "./multislide.styles";

interface IMultiSlide2 {
  slideToShow: number;
}

export default function MultiSlide2(props: IMultiSlide2) {
  const settings = {
    speed: 500,
    slidesToShow: props.slideToShow,
    slidesToScroll: props.slideToShow,
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
