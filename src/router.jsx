import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ImgSlider from "./components/header/sliderHeader/ImgSlider";

import Main from "./components/main/Main";
import Movie from "./components/pages/Movie";


export const router = createBrowserRouter([
    {
        element:<App/>,
        children:[{
            path:'/',
            element:[<ImgSlider/>,<Main/>]
        },{
            path:"/movies/:id",
            element:<Movie/>
        }]
    }
])