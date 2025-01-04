import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Education from "../pages/Education";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skill",
        element: <Skill></Skill>,
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
    ],
  },
]);

export default Router;
