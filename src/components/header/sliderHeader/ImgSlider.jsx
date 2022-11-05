import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import axios from "axios";
import { apiKey, baseUrl, baseUrlImage } from "../../../api";
import { useEffect } from "react";

export default function ImgSlider() {
  const [movies, setMovies] = useState([]);
  async function getMovie() {
    const { data } = await axios.get(
      `${baseUrl}/trending/all/day?api_key=${apiKey}`
    );
    setMovies(data.results);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {movies.map(
          ({
            backdrop_path,
            title,
            overview,
            release_date,
            vote_average,
            id,
          }) => {
            return (
              <SwiperSlide key={id} className="imgSliders">
                <img src={`${baseUrlImage}/w1280/${backdrop_path}`} />
                <div className="gap-8 w-2/4 leading-7 z-50 absolute top-9 left-8 lg:top-40 left-8 ">
                  <h1 className="text-3xl uppercase font-bold">{title}</h1>
                  <p className="mt-8">{overview}</p>
                  <div>{vote_average}</div>
                  <div>{release_date}</div>
                  <button className="mt-8 bg-sky-400 px-6 py-1 rounded">
                    <i class="bi bi-play-fill"></i>Play Now
                  </button>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </>
  );
}
