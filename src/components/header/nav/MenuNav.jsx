import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuNav() {
  const items = [
    {
      name: "Home",
      path: "/",
    },
    {
     name:"Series",
     path:"/series"
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  function activeNav({isActive}){
    return isActive ? "text-sky-500" : "text-white"
  }
  return (
    <ul className="hidden lg:flex gap-4 items-center">
      {items.map((item) => {
        return (
          <li>
            <NavLink to={item.path} className={activeNav}>{item.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
