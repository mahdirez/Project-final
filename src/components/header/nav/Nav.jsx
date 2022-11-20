import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoNav from "./LogoNav";
import MenuNav from "./MenuNav";
import SearchNav from "./SearchNav";
import SubscriptionNav from "./SubscriptionNav";

export default function Nav() {
  const [menu, openMenu] = useState(false);
  const itemNav = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Series",
      path:"/series"
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  return (
    <div className="mx-auto">
      <div className="overflow-hidden py-4 px-6  bg-gradient-to-b from-black  text-lg flex justify-between items-center uppercase  w-full z-20 md:fixed">
        <div className="flex items-center lg:gap-8">
          <LogoNav />
          <MenuNav />
          <button
            className="block lg:hidden text-2xl z-50"
            onClick={() => openMenu(!menu)}
          >
            <i class={menu ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>
        </div>
        <div className="flex gap-0 md:gap-2">
          <SearchNav />
          <SubscriptionNav />
        </div>
      </div>
      <ul
        className={`z-40 bg-slate-800 h-full w-3/5 flex flex-col justify-center items-center fixed top-0 left-0 gap-12 transition-all duration-500 lg:hidden`}
        style={{ translate: menu ? "0%" : "-100%" }}
      >
        {itemNav.map((item) => {
          return (
            <li>
              <Link to={item.path} onClick={()=>openMenu(!menu)}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
