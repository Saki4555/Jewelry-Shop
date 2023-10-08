import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { getSellerJewelries } from "../api/jewelries";
import MyContainer from "../components/shared/MyContainer";
import demo from '../assets/products/demo.webp'

const MyJewelries = () => {
  const { user } = UseAuth();
  const [myJewelries, setMyJewelries] = useState([]);

  useEffect(() => {
    getSellerJewelries(user.email).then((sellerData) => {
      console.log(sellerData);
      setMyJewelries(sellerData);
    });
  }, [user]);
  return (
    <MyContainer>
      <div className="overflow-x-auto pt-28 pb-14">
        <table className="table">
          {/* head */}
          <thead>
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
                              src={demo}
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
                    <td>{item.price}</td>
                    <td>{item.amount}</td>
                  </tr>)
            }
           
            
          </tbody>
      
        </table>
      </div>
    </MyContainer>
  );
};

export default MyJewelries;
