import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const ApparelComponent = ({ children }) => {
  return (
    <Swiper 
    slidesPerView={"auto"} 
    spaceBetween={10} 
    initialSlide={1} 
    loop={true}>
      {children}
    </Swiper>
  );
}; 

export default ApparelComponent;