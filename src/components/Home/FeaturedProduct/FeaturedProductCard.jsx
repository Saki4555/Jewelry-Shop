import demo from "../../../assets/products/demo.webp";

const FeaturedProductCard = () => {
  // lg:w-[263px] lg:h-[263px
  return (
    <div>
      <div className="px-2 md:px-0 w-full relative">
        <div className="absolute top-4 left-4 text-white space-y-1 transition">
          <div className="text-xs btn-1 px-3 py-[2px] rounded-full drop-shadow">
            New
          </div>
          <div className="text-xs btn-2 px-3 py-[2px] rounded-full drop-shadow">
            10%
          </div>
        </div>
        <img
          src={demo}
          className="object-cover object-center transition"
          alt=""
        />
      </div>
      <div className="text-center py-6 tracking-wider">
        <p className="text-sm">Lizure</p>
        <h5 className="font-medium">The Horizon</h5>
        <p className="text-[#C29958]">$50</p>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
