import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-68px)] bg-base-300">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
