import Slider from "react-slick";
import { SliderItem, GalWrapper } from "./styled-index";
import "./slider.css";

function DocSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <GalWrapper>
      <Slider {...settings}>
        <SliderItem id="1   ">
          <div>
            <img
              src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            molestiae.
          </p>
        </SliderItem>
        <SliderItem id="2   ">
          <div>
            <img
              src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            molestiae.
          </p>
        </SliderItem>
        <SliderItem id="3   ">
          <div>
            <img
              src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            molestiae.
          </p>
        </SliderItem>
        <SliderItem id="4">
          <div>
            <img
              src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            molestiae.
          </p>
        </SliderItem>
        <SliderItem id="5">
          <div>
            <img
              src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            molestiae.
          </p>
        </SliderItem>
        <SliderItem id="6   ">
          <div>
            <img
              src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            molestiae.
          </p>
        </SliderItem>
      </Slider>
    </GalWrapper>
  );
}

export default DocSlider;
