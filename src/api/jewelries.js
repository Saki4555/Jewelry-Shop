export const addJewelry = async (newJewelry) => {
    console.log(newJewelry);
  const res = await fetch(`${import.meta.env.VITE_API_URL}/jewelries`,{
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newJewelry)
  });
  const data = res.json();
  return data ;
};
