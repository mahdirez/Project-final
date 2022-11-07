import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ImgSlider from "./components/header/sliderHeader/ImgSlider";

import Main from "./components/main/Main";
import About from "./components/pages/About";
import Movie from "./components/pages/Movie";
import TrailerMovie from "./components/pages/TrailerMovie";


export const router = createBrowserRouter([
    {
        element:<App/>,
        children:[{
            path:'/',
            element:[<ImgSlider/>,<Main/>]
        },{
            path:"/movies/:id",
            element:<Movie/>
        },{
            path:"/videos/:id",
            element:<TrailerMovie/>
        },
    {
        path:"/about/",
        element:<About/>
    }]
    }
])