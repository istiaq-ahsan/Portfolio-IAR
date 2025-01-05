import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Education from "../pages/Education";
import ViewDetails from "../components/ViewDetails";
import ContactMe from "../pages/ContactMe";

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
      {
        path: "viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          const res = await fetch("/project.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
      },
      {
        path: "/contact",
        element: <ContactMe></ContactMe>,
      },
    ],
  },
]);

export default Router;
