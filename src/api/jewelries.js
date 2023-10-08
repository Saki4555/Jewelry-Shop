export const getAllJewelries = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/jewelries`);
  const data = await response.json();
  return data;
};

export const addJewelry = async (newJewelry) => {
  console.log(newJewelry);
  const res = await fetch(`${import.meta.env.VITE_API_URL}/jewelries`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newJewelry),
  });
  const data = await res.json();
  return data;
};

export const getSellerJewelries = async (email) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/jewelries/${email}`);
  const data = await response.json();
  return data;
};


