import React from "react";
import { Link } from "react-router-dom";
import { imgUrl } from "../../../helper/imgUrl";

export default function Tv({ item }) {
  return (
    <Link to={`/movies/${item.id}`}>
      <div className="flex gap-2 items-center">
        <img
          className="object-cover w-11 h-11 rounded-md"
          src={item.poster_path ? imgUrl(item.poster_path, "w92") : "/tv3.png"}
          alt=""
        />
        <p>{item.name}</p>
      </div>
    </Link>
  );
}
