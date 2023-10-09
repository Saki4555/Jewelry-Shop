import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { getSellerJewelries } from "../api/jewelries";
import MyContainer from "../components/shared/MyContainer";
import Loader from "../components/shared/Loader";

const MyJewelries = () => {
  const { user } = UseAuth();
  const [myJewelries, setMyJewelries] = useState([]);
  const [ loading, setLoading ] = useState(false);
  console.log(loading);

  useEffect(() => {
    setLoading(true);
    getSellerJewelries(user?.email).then((sellerData) => {
      console.log(sellerData);
      setMyJewelries(sellerData);
      setLoading(false);
    });
  }, [user?.email]);


  if(loading){
    return <Loader></Loader>
  }
  return (
    <MyContainer>
      <div className="overflow-x-auto pt-28 pb-14">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-[15px] text-black">
            <tr>
                <th>Image</th>
              <th>Name</th>
              <th>BrandName</th>
              <th>Price</th>
              <th>In Stock</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                myJewelries.map( item =>  <tr key={item._id}>
             
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.jewelryImage}
                              alt="jewelry"
                            />
                          </div>
                        </div>
                       
                      </div>
                    </td>
                    <td>
                     {item.name}
                    </td>
                    <td>{item.brandName}</td>
                    <td className="text-[#C29958]">${item.price}</td>
                    <td className="text-green-600">{item.amount}</td>
                  </tr>)
            }
           
            
          </tbody>
      
        </table>
      </div>
    </MyContainer>
  );
};

export default MyJewelries;
