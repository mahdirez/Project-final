import React from "react";
import Content from "./headerContent/Content";
import Nav from "./nav/Nav";
import ImgSlider from "./sliderHeader/ImgSlider";

export default function Header() {
  return (
    <div>
      <Nav />
      <ImgSlider />
      <Content/>
    </div>
  );
}
