export const addToCart = async (jewelry ) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/cart/${jewelry.id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(jewelry),
  });
  return await res.json();
};
