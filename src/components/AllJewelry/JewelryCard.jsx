import demo from "../../assets/products/demo.webp";
const JewelryCard = ({ item }) => {
  return (
    <div className="group">
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
        <div className="-mt-9 flex justify-center items-center h-6">
          <button className="hidden px-4 py-1.5 text-black group-hover:block bg-white hover:bg-[#C29958] hover:text-white rounded-full drop-shadow-lg">
           Add to Cart
          </button>
        </div>
      </div>
      <div className="text-center py-6 tracking-wider">
        <p className="text-sm">{item?.brandName}</p>
        <h5 className="font-medium">{item.name}</h5>
        <p className="text-[#C29958]">${item?.price}</p>
      </div>
    </div>
  );
};

export default JewelryCard;
