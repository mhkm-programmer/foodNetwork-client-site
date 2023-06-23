import AboutUs from "../pages/about/AboutUs";
import BlogPages from "../pages/blogs/BlogPages";
import ChefCard from "../pages/Home/chefCard/ChefCard";
import ErrorPage from "../pages/errorPage/ErrorPage";

import Main from "../layouts/Main";
import PrivateRouter from "./PrivateRouter";
import Recipe from "../layouts/Recipe";
import Register from "../layouts/logLayouts/Register";
import SignIn from "../layouts/logLayouts/SignIn";
import { createBrowserRouter } from "react-router-dom";
import Terms from "../pages/terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "login",
    element: <SignIn></SignIn>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "recipe",
    element: <ChefCard></ChefCard>,
  },
  {
    path: "recipe/:id",
    element: (
      <PrivateRouter>
        <Recipe></Recipe>
      </PrivateRouter>
    ),
    loader: ({ params }) =>
      fetch(
        `https://assignment10-chef-recipe-hunter-server-sid-mhkmabraham-gmailcom.vercel.app/recipe/${params.id}`
      ),
  },
  {
    path: "/blog",
    element: <BlogPages></BlogPages>,
  },
  {
    path: "/about",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/terms",
    element: <Terms></Terms>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
