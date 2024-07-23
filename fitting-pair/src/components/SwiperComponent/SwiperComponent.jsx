import { Swiper } from "swiper/react";
import "swiper/css";

const SwiperComponent = ({ children }) => {
  return (
    <Swiper slidesPerView={"auto"} centeredSlides={true} spaceBetween={10} initialSlide={1}>
      {children}
    </Swiper>
  );
}; 

export default SwiperComponent;
