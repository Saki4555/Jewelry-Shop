import { Tab } from "@headlessui/react";
import { useContext } from "react";
import JewelryCard from "../components/AllJewelry/JewelryCard";
import MyContainer from "../components/shared/MyContainer";
import { JewelryDataContext } from "../providers/JewelryDataProvider";
import Loader from "../components/shared/Loader";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AllJewelry() {


    const { categoryData, setToFilter, jewelryLoading } = useContext(JewelryDataContext);


    if(jewelryLoading){
      return <Loader></Loader>
    }


  // const [jewelries, setJewelries] = useState();
  // const [toFilter, setToFilter] = useState("Earring");
  // const [categoryData, setCategoryData] = useState();

  // useEffect(() => {
  //   getAllJewelries()
  //     .then((jewelryData) => setJewelries(jewelryData))
  //     .catch((err) => console.log(err.message));
  // }, []);

  // useEffect(() => {
  //   const filteredData = jewelries?.filter(
  //     (item) => item.category === toFilter
  //   );

  //   setCategoryData(filteredData);
  // }, [jewelries, toFilter]);

  return (
    <>

        <MyContainer>
          {" "}
          <div className="w-full px-2 pt-28 pb-16 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-1 max-w-md mx-auto rounded-xl bg-[#C29958]/60 p-1 mb-8">
                {["Earring", "Ring", "Necklace", "Bracelet"].map((category) => (
                  <Tab
                    key={category}
                    onClick={() => setToFilter(category)}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                        "ring-white ring-opacity-60 ring-offset-2  ring-offset-[#C29958] focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white text-black shadow"
                          : "text-white hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                  {categoryData?.map((item, idx) => (
                    <JewelryCard key={idx} item={item}></JewelryCard>
                  ))}
                </div>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </MyContainer>
      
    </>
  );
}
