import Slider from "react-slick";
import { GalWrapper, SliderItem  } from "./styled-index";
import "./slider.css"

function Slder() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: 1,
        },
      },
    ],
  };

  return (
    <>
      <GalWrapper>
        <Slider {...settings}>
          <SliderItem>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <img src="https://picsum.photos/700" alt="" />
          </SliderItem>
          <SliderItem>
          <h3>Lorem ipsum dolor sit amet.</h3>
            <img src="https://picsum.photos/700" alt="" />
          </SliderItem>
          <SliderItem>
          <h3>Lorem ipsum dolor sit amet.</h3>
            <img src="https://picsum.photos/700" alt="" />
          </SliderItem>
        </Slider>
      </GalWrapper>
    </>
  );
}


export default Slder;