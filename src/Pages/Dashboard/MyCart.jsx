import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { getCartJewelries } from "../../api/cart";
import Loader from "../../components/shared/Loader";


const MyCart = () => {
    const { user } = UseAuth();
    const [ selectedJewelries, setSelectedJewelries] = useState([]);
    const [ loading, setLoading ] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      getCartJewelries(user?.email).then(( cartData) => {
        console.log(cartData);
        setSelectedJewelries(cartData);
        setLoading(false);
      });
    }, [user?.email]);

  if(loading){
    return <Loader></Loader>
  }

    return (
        <div className="overflow-x-auto px-10 pt-10 pb-14">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-[15px] text-black">
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
                selectedJewelries.map( item =>  <tr key={item._id}>
             
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
                    <td>{item.price}</td>
                    <td><button className="btn btn-primary btn-xs">Buy</button></td>
                  </tr>)
            }
           
            
          </tbody>
      
        </table>
      </div>
    );
};

export default MyCart;