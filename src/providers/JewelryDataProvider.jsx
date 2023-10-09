import { createContext, useEffect, useState } from "react";
import { getAllJewelries } from "../api/jewelries";

export const JewelryDataContext = createContext(null);

const JewelryDataProvider = ({ children }) => {
  const [jewelries, setJewelries] = useState([]);
  const [toFilter, setToFilter] = useState("Earring");
  const [categoryData, setCategoryData] = useState([]);
  const [jewelryLoading, setJewelryLoading] = useState(false);

  useEffect(() => {
    setJewelryLoading(true);
    getAllJewelries()
      .then((jewelryData) => {
        setJewelries(jewelryData)
        setJewelryLoading(false);
      })
      .catch((err) => {
        console.log(err.message)
        setJewelryLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredData = jewelries?.filter(
      (item) => item.category === toFilter
    );

    setCategoryData(filteredData);
  }, [jewelries, toFilter]);

  const jewelryProduct = {
    jewelries,
      categoryData,
      setToFilter,
      jewelryLoading,
  }

  return (
    <JewelryDataContext.Provider value={jewelryProduct}>
        {children}
    </JewelryDataContext.Provider>
  );
};

export default JewelryDataProvider;
