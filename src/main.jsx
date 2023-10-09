import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider";
import JewelryDataProvider from "./providers/JewelryDataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JewelryDataProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </JewelryDataProvider>
  </React.StrictMode>
);
