import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ImgSlider from "./components/header/sliderHeader/ImgSlider";

import Main from "./components/main/Main";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Movie from "./components/pages/Movie";
import People from "./components/pages/People";
import Series from "./components/pages/Series";
import TrailerMovie from "./components/pages/TrailerMovie";
import SearchBox from "./components/searchBox/SearchBox";
import UserProvider from "./context/UserContext";


export const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
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
        path:"/people/:id",
        element:<People/>

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
        path: "/login/",
        element: <Login />,
      },
      {
        path: "/series/",
        element: <Series />,
      },
      {
        path: "/search/",
        element: <SearchBox/>,
      },
    ],
  },
]);
