import toast from "react-hot-toast";
import { addToCart } from "../../api/cart";
import UseAuth from "../../Hooks/UseAuth";
import { useState } from "react";
import CheckSignedModal from "../../Modals/CheckSignedModal";

const JewelryCard = ({ item }) => {
  const { user } = UseAuth();
  const [ isOpen, setIsOpen] = useState(false);
  const handleAddToCart = () => {
    if (user && user.email) {
      const {
        name,
        brandName,
        category,
       
        amount,
        price,
        jewelryImage,
        sellerEmail,
        sellerName,
        totalSold,
        _id,
      } = item;
      const jewelry = {
        name,
        brandName,
        category,
        customerName: user.displayName,
        customerEmail: user.email,
        amount,
        price,
        jewelryImage,
        sellerName,
        sellerEmail,
        totalSold,
        id: _id,
      };

      // console.log(jewelry);
      addToCart(jewelry)
        .then((cartData) => {
          console.log(cartData);
          if (cartData.upsertedCount) {
            toast.success("Added to Cart Successfully");
            return;
          }
          if (cartData.matchedCount) {
            toast.success("This jewelry is already in your cart.", {
              style: {
                border: "1px solid #713200",
                padding: "10px",
                color: "#713200",
              },
              iconTheme: {
                primary: "#713200",
                secondary: "#FFFAEE",
              },
            });
          }
        })
        .catch((err) => console.log(err));
    }
    else{
      setIsOpen(true);
    }
  };
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
          src={item?.jewelryImage}
          className="object-cover object-center w-full h-60 transition"
          alt=""
        />
        <div className="-mt-9 flex justify-center items-center h-6">
          <button
            onClick={handleAddToCart}
            disabled = { item?.sellerEmail === user?.email}
            type="button"
            className={item?.sellerEmail === user?.email ? "bg-gray-200 hidden px-4 py-1.5  font-medium group-hover:block rounded-full drop-shadow-lg text-white" : "hidden px-4 py-1.5 text-black font-medium group-hover:block bg-white hover:bg-[#C29958] hover:text-white rounded-full drop-shadow-lg"}
          >
            Add to Cart
          </button>
        </div>
        <CheckSignedModal isOpen={isOpen} setIsOpen={setIsOpen}></CheckSignedModal>
      </div>
      <div className="text-center py-6 tracking-wider">
        
        <p className="text-sm">{item?.brandName}</p>
        <div className="flex gap-1.5 justify-center items-center p-2">
         <div className="w-3 h-3  bg-sky-200 rounded-full"></div>
         <div className="w-3 h-3 bg-yellow-600/60 rounded-full"></div>
         <div className="w-3 h-3 bg-gray-500/70 rounded-full"></div>
         <div className="w-3 h-3 bg-orange-800/80 rounded-full"></div>
        </div>
        <h5 className="font-medium">{item?.name}</h5>
        <p className="text-[#C29958]">${item?.price}</p>
      </div>
    </div>
  );
};

export default JewelryCard;
