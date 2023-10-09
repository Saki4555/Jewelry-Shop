import { Link } from "react-router-dom";
import categoryImage1 from "../..//assets/categories/category1.webp";
import categoryImage2 from "../..//assets/categories/category2..webp";
import categoryImage3 from "../..//assets/categories/category3.webp";
import categoryImage4 from "../..//assets/categories/category4.webp";
import MyContainer from "../shared/MyContainer";

const Categories = () => {
  return (
    <MyContainer>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div
          className="w-[545px] h-[250px] bg-center bg-cover"
          style={{
            backgroundImage: `url(${categoryImage1})`,
          }}
        >
          <div className="w-full h-full flex pr-0 md:pr-12 justify-center md:justify-end items-center">
            <div>
              <p className="uppercase font-medium">Beautiful</p>
              <p className="uppercase py-4 font-bold text-2xl">
                Wedding <br /> Rings
              </p>
              <Link to="/all-jewelries">
                {" "}
                <button className="border-b-2 mt-3 border-b-black hover:text-[#C29958] hover:border-b-[#C29958]">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="w-[545px] h-[250px] bg-center bg-cover"
          style={{
            backgroundImage: `url(${categoryImage2})`,
          }}
        >
          <div className="w-full h-full flex pr-0 md:pr-12 justify-center md:justify-end items-center">
            <div>
              <p className="uppercase font-medium">Earrings</p>
              <p className="uppercase py-4 font-bold text-2xl">
                Tangerine Floral <br /> Earring
              </p>
              <Link to="/all-jewelries">
                {" "}
                <button className="border-b-2 mt-3 border-b-black hover:text-[#C29958] hover:border-b-[#C29958]">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="w-[545px] h-[250px] bg-center bg-cover"
          style={{
            backgroundImage: `url(${categoryImage3})`,
          }}
        >
          <div className="w-full h-full flex pr-0 md:pr-12 justify-center md:justify-end items-center">
            <div>
              <p className="uppercase font-medium">New Arrivals</p>
              <p className="uppercase py-4 font-bold text-2xl">
                Pearl <br /> Necklaces
              </p>
              <Link to="/all-jewelries">
                {" "}
                <button className="border-b-2 mt-3 border-b-black hover:text-[#C29958] hover:border-b-[#C29958]">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="w-[545px] h-[250px] bg-center bg-cover"
          style={{
            backgroundImage: `url(${categoryImage4})`,
          }}
        >
          <div className="w-full h-full flex pr-0 md:pr-12 justify-center md:justify-end items-center">
            <div>
              <p className="uppercase font-medium">New Designs</p>
              <p className="uppercase py-4 font-bold text-2xl">
                Diamond <br /> Jewelry
              </p>
              <Link to="/all-jewelries">
                {" "}
                <button className="border-b-2 mt-3 border-b-black hover:text-[#C29958] hover:border-b-[#C29958]">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Categories;
