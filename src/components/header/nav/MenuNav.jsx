import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuNav() {
  return (
    <ul className="hidden lg:flex gap-4 items-center">
      <li>
        <NavLink to="/free">Home</NavLink>
      </li>
      <li>
        <a href="/">Series</a>
      </li>
      <li className="text-sky-400">
        <a href="/">Categories</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">News</a>
      </li>
    </ul>
  );
}
