export const addToCart = async ({ jewelry }) => {
  const res = await fetch(`${import.meta.en.VITE_API_URL}/carts`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(jewelry),
  });
  return await res.json();
};
