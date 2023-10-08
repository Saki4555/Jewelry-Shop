import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import JewelryCard from "../components/AllJewelry/JewelryCard";
import MyContainer from "../components/shared/MyContainer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AllJewelry() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <MyContainer>
      {" "}
      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 max-w-md mx-auto rounded-xl bg-blue-900/20 p-1">
            {[1, 2, 3].map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
              {data?.map((item, idx) => (
                <JewelryCard key={idx}>{item.name}</JewelryCard>
              ))}
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </MyContainer>
  );
}
