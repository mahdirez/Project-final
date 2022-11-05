import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { apiKey, baseUrl, baseUrlImage } from "../../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

export default function PopularCard() {
  const [card, setCard] = useState([]);
  async function apiCard() {
    const { data } = await axios.get(
      `${baseUrl}/movie/popular?api_key=${apiKey}`
    );
    setCard(data.results);
  }
  useEffect(() => {
    apiCard();
  }, []);
  return (
    <div className="bg-sky-500 h-fit">
      <div className="py-4 px-6">
        <h1 className="text-2xl my-2">Popular</h1>
        <Swiper
          rewind={true}
          slidesPerView={1}
          spaceBetween={1}
          loop={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          className="mySwiper"
        >
          {card.map(({ title, backdrop_path, vote_average, id }) => {
            return (
              <SwiperSlide key={id}>
                <img
                  src={`${baseUrlImage}/w1280/${backdrop_path}`}
                  className="object-cover w-full h-full rounded mt-2"
                  alt="test"
                />

                <div className="flex flex-col justify-center items-center mt-4  w-full h-full ">
                  <h3>{title}</h3>
                  <h3 className="flex gap-2">
                    <span className="text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </span>
                    {vote_average}/10
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
