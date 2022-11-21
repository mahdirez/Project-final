import React from "react";
import { Link } from "react-router-dom";

export default function SearchNav() {
  return (
    <button className="text-2xl">
      <Link to="/search"><i className="bi bi-search"></i></Link>
    </button>
  );
}
