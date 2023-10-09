import { FaShippingFast } from "react-icons/fa";
import { SlSupport } from "react-icons/sl";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import MyContainer from "../shared/MyContainer";

const Services = () => {
  return (
    <MyContainer>
      <div className="flex justify-between pt-10">
        <div className="flex gap-2">
          <FaShippingFast className="text-[#C29958] w-7 h-7"></FaShippingFast>
          <div>
            <h4 className="font-medium">Free Shipping</h4>
            <p className="text-sm">Free shipping all order</p>
          </div>
        </div>
        <div className="flex gap-2">
          <SlSupport className="text-[#C29958] w-7 h-7"></SlSupport>
          <div>
            <h4 className="font-medium">Support 24/7</h4>
            <p className="text-sm">Support 24 hours a day</p>
          </div>
        </div>
        <div className="flex gap-2">
          <GiReturnArrow className="text-[#C29958] w-7 h-7"></GiReturnArrow>
          <div>
            <h4 className="font-medium">Money Return</h4>
            <p className="text-sm">30 days for free return</p>
          </div>
        </div>
        <div className="flex gap-2">
          <MdOutlinePayment className="text-[#C29958] w-7 h-7"></MdOutlinePayment>
          <div>
            <h4 className="font-medium">100% Payment Secure</h4>
            <p className="text-sm">We ensure secure payment</p>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Services;
