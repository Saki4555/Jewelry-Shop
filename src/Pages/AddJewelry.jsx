import { useForm } from "react-hook-form";
import MyContainer from "../components/shared/MyContainer";

const AddJewelry = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const categories = ["Earring", "Ring", "Necklace", "Bracelet"];
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <MyContainer>
      <div className="px-8 pt-36 pb-16">
        <div className="border-2 border-[#C29958] rounded-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white bg-opacity-75 shadow-lg"
          >
            <div className="px-8 pt-6 pb-4 mb-2">
              <div className="flex items-center gap-4">
                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Jewelry Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                    type="text"
                    placeholder="Enter class Name"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>

                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="image"
                  >
                    Jewelry Image
                  </label>
                  <input
                    type="file"
                    {...register("image", { required: true })}
                    className="file-input file-input-bordered w-full]"
                  />
                  {errors.image && (
                    <span className="text-red-500">Image is required</span>
                  )}
                </div>
              </div>
              {/* updating here */}
              <div className="flex items-center gap-4">
                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="brand"
                  >
                    Brand Name
                  </label>
                  <input
                    {...register("brandName", { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                    type="text"
                    placeholder="Enter class Name"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>

                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  {/* select here */}
                  <select
                    required
                    className="w-full px-4 py-3 border-rose-300 focus:outline-[#C29958] rounded-md"
                    name="category"
                    defaultValue={"caategory"}
                    {...register("category", { required: true })}
                  >
                    {categories.map((category, idx) => (
                      <option value={category} key={idx}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.image && (
                    <span className="text-red-500">Image is required</span>
                  )}
                </div>
              </div>

              <div className="flex gap-4 mb-2">
                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="sellerName"
                  >
                    Seller Name
                  </label>
                  <input
                    // {...register('sellerName')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                    type="text"
                    //   defaultValue={loggedUser?.name}
                    // readOnly
                    disabled
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="sellerEmail"
                  >
                    Seller Email
                  </label>
                  <input
                    // {...register('SellerEmail')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                    type="email"
                    //   defaultValue={loggedUser?.email}
                    // readOnly
                    disabled
                  />
                </div>
              </div>

              <div className="flex gap-4 mb-2">
                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="seat"
                  >
                    Amount
                  </label>
                  <input
                    {...register("seat", { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                    type="text"
                  />
                  {errors.seat && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>
                <div className="mb-4 w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="iemail"
                  >
                    Price
                  </label>
                  <input
                    {...register("price", { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                    type="number"
                  />
                  {errors.price && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>
              </div>

              {/* <input type="number" {...register('rating')} className="border hidden" defaultValue={5} readOnly/> */}

              {/* add button */}
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#C29958] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:bg-black hover-text-white transition"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MyContainer>
  );
};

export default AddJewelry;
