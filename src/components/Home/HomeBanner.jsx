import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";
import HomeSliderContent from "./HomeSliderContent";

import slide1 from "../../assets/home/home1-slide1.webp";
import slide2 from "../../assets/home/home2-slide2.webp";
import slide3 from "../../assets/home/home3-slide3.webp";

const HomeBanner = () => {
  return (
    <div className="pt-16">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HomeSliderContent
            img={slide1}
            text={{
              title: "New Diamond",
              titleSpan: "& Wedding Rings",
              description: "Avail 15% off on Making Charges for all Jewelry",
            }}
           
          ></HomeSliderContent>
        </SwiperSlide>
        <SwiperSlide>
          <HomeSliderContent
            img={slide2}
            text={{
              title: "Grace Designer",
              titleSpan: "Jewelry",
              description: "Rings, Occasion Pieces, Pandora & More.",
            }}
          ></HomeSliderContent>
        </SwiperSlide>
        <SwiperSlide>
          <HomeSliderContent
            img={slide3}
            text={{
              title: "Family Jewelry",
              titleSpan: "Collection",
              description: "Designer Jewelry Necklaces-Bracelets-Earings",
            }}
          ></HomeSliderContent>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
