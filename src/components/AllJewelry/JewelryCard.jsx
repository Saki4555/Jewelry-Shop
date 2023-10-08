import demo from '../../assets/products/demo.webp'
const JewelryCard = () => {
  return (
    <div className="px-2 md:px-0 w-full relative">
      <div className="absolute top-4 left-4 text-white space-y-1">
        <div className="text-xs btn-1 px-3 py-[2px] rounded-full drop-shadow">
          New
        </div>
        <div className="text-xs btn-2 px-3 py-[2px] rounded-full drop-shadow">
          10%
        </div>
      </div>
      <img src={demo} className="object-cover object-center" alt="" />
    </div>
  );
};

export default JewelryCard;
