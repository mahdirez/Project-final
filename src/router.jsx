import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ImgSlider from "./components/header/sliderHeader/ImgSlider";

import Main from "./components/main/Main";
import About from "./components/pages/About";
import Categories from "./components/pages/Categories";
import Login from "./components/pages/Login";
import Movie from "./components/pages/Movie";
import Series from "./components/pages/Series";
import TrailerMovie from "./components/pages/TrailerMovie";
import UserProvider from "./context/UserContext";

export const router = createBrowserRouter([
  {
    element: <UserProvider><App/></UserProvider>,
    children: [
      {
        path: "/",
        element: [<ImgSlider />, <Main />],
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
      {
        path: "/videos/:id",
        element: <TrailerMovie />,
      },
      {
        path: "/about/",
        element: <About />,
      },
      {
        path:"/login/",
        element:<Login/>
      },
      {
        path:"/categories/",
        element:<Categories/>
      },
      {
        path:"/series/",
        element:<Series/>
      }
    ],
  },
]);
