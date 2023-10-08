import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { BsCartDash } from "react-icons/bs";
import { toast } from "react-hot-toast";
import SellerRequestModal from "../../Modals/SellerRequestModal";
import { becomeSeller } from "../../api/auth";

const BuyerMenu = () => {


  const { role, user, setRole } = useContext(AuthContext);
  console.log(role);
  const [modal, setModal] = useState(false);
  const modalHandler = (email) => {
    becomeSeller(email).then((data) => {
      console.log(data);
      toast.success("You are a Seller now, Add Jewelries!");
      setRole("seller");
      closeModal();
    });
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <NavLink
        to="my-cart"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <BsCartDash className="w-5 h-5" />

        <span className="mx-4 font-medium">My Cart</span>
      </NavLink>

      {!role && (
        <div
          onClick={() => setModal(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Seller</span>
        </div>
      )}
      <SellerRequestModal
        email={user?.email}
        modalHandler={modalHandler}
        isOpen={modal}
        closeModal={closeModal}
      />
    </>
  );
};

export default BuyerMenu;
