import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Caro.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
              alt="pic"
            />
            <h3>Round</h3>

            <div className="exp">
                Expore
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
              alt="pic"
            />
            <h3>chck</h3>

            <div className="exp">
                Expore
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
              alt="pic"
            />
            <h3>chck</h3>

            <div className="exp">
                Expore
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
              alt="pic"
            />
            <h3>chck</h3>

            <div className="exp">
                Expore
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
              alt="pic"
            />
            <h3>chck</h3>

            <div className="exp">
                Expore
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
              alt="pic"
            />
            <h3>chck</h3>

            <div className="exp">
                Expore
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
              alt="pic"
            />
            <h3>chck</h3>

            <div className="exp">
                Expore
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
              alt="pic"
            />
            <h3>chck</h3>

            <div className="exp">
                Expore
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg"
              alt="pic"
            />
            <h3>chck</h3>

            <div className="exp">
                Expore
            </div>
          </div></SwiperSlide>
      </Swiper>
    </>
  );
}
