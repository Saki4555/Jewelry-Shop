import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Toaster></Toaster>
    <Footer></Footer>
    </>
  );
}

export default App;
