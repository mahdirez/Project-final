import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiKey, baseUrl, baseUrlImage } from "../../api";

export default function People() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  async function dynamicMovie() {
    const { data } = await axios.get(
      `${baseUrl}/person/${id}?api_key=${apiKey}`
    );
    setMovie(data);
  }

  useEffect(() => {
    dynamicMovie();
  }, [id]);
  return (
    <div>
      <div className="pt-10 bg-slate-900  ">
        <div className="flex flex-col leading-10 md:flex-row gap-8 p-10">
          <div>
            <img
              src={`${baseUrlImage}/w1280/${movie.profile_path}`}
              className="object-cover w-72 h-68 "
              alt="test"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-3xl font-bold">{movie.name}</div>
            <div className="text-lg">
            birthday :  {movie.birthday} 
            </div>
            <div className="flex gap-8 md:gap-12">
              <i className="bi bi-list-nested "></i>
              <i className="bi bi-heart-fill"></i>
              <i className="bi bi-caret-down-square-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <div>
              <h1 className="text-3xl">biography</h1>
              <p className="text-base">{movie.biography}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
