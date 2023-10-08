export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
  };

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    }
  );
  return await res.json();
};

export const becomeSeller = async (email) => {
  const currentUser = {
    role: "seller",
  };

  const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  });
  return await res.json();
};

export const getRole = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`
  );
  const user = await response.json();
  return user?.role;
};
