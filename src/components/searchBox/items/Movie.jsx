import React from "react";
import { Link } from "react-router-dom";
import { imgUrl } from "../../../helper/imgUrl";


export default function Movie({ item }) {
  return (
     <Link to={`/movies/${item.id}`}>
      <div className="flex gap-2 items-center">
        <img
          className="object-cover w-11 h-11 rounded-md"
          src={
            item.profile_path ? imgUrl(item.profile_path, "w45") : "/movie.png"
          }
          alt=""
        />
        <p>{item.title}</p>
      </div>
     </Link>
  );
}
