import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { apiKey, baseUrl, baseUrlImage } from "../../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";


export default function UpComingCard() {
  const [card, setCard] = useState([]);
  async function apiCard() {
    const { data } = await axios.get(
      `${baseUrl}/movie/upcoming?api_key=${apiKey}`
    );
    setCard(data.results);
  }
  useEffect(() => {
    apiCard();
  }, []);
  return (
    <div className="bg-sky-500 h-fit">
      <div className="py-4 px-6">
        <h1 className="text-2xl my-2">Up Coming</h1>
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
          {card.map(({ title, backdrop_path, release_date, id }) => {
            return (
              <SwiperSlide key={id}>
                  <img
                    src={`${baseUrlImage}/w1280/${backdrop_path}`}
                    className="object-cover w-full h-full rounded mt-2"
                    alt="test"
                  />
                
                <div className="flex flex-col justify-center items-center mt-4  w-full h-full ">
                    <h3>{title}</h3>
                    <h3>{release_date}</h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
