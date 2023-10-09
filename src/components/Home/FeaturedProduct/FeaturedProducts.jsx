import MyContainer from "../../shared/MyContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation} from "swiper/modules";
import FeaturedProductCard from "./FeaturedProductCard";
import { useContext } from "react";
import { JewelryDataContext } from "../../../providers/JewelryDataProvider";
import JewelryCard from "../../AllJewelry/JewelryCard";

const FeaturedProducts = () => {
  const {jewelries, jewelryLoading } = useContext(JewelryDataContext);

  return (
    <>
      <MyContainer>
        <div className="text-center pt-20 pb-12">
          <h2 className="text-[30px] font-semibold">Featured Products</h2>

          <p className="text-[16px] font-[400]">
            Add featured products to weekly lineup
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {jewelries.map((item) => (
            <SwiperSlide key={item._id}>
             <JewelryCard item={item}></JewelryCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </MyContainer>
    </>
  );
};

export default FeaturedProducts;
