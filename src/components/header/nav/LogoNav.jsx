import React from "react";
import { Link } from "react-router-dom";

export default function LogoNav() {
  return (
    <div className="z-50">
      <Link to="/">
        <p className="text-3xl z-50 ">
          Movie<span className="text-sky-400">App</span>
        </p>
      </Link>
    </div>
  );
}
