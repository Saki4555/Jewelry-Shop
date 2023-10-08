import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
