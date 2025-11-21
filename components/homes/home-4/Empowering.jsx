"use client";

import { events3 } from "@/data/events";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Courses() {
  const [allProducts, setallProducts] = useState(events3);
  const [filtered, setFiltered] = useState(allProducts);

  // No categories, so filtered = all courses
  useEffect(() => {
    setFiltered(allProducts);
  }, [allProducts]);

  const options = {
    loop: true,

    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },

    speed: 4000,
    cssMode: false,
    freeMode: false,
    spaceBetween: 20, // spacing fixed!
    centeredSlides: false, // ensures spacing is visible

    slidesPerView: "auto", // mandatory for continuous slider
    allowTouchMove: true,

    navigation: {
      nextEl: ".popular-courses-next",
      prevEl: ".popular-courses-prev",
    },

    pagination: {
      el: ".spd4",
      clickable: true,
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      900: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  };

  return (
    <section className=" section-popular-courses bg-4 custom-pb">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div
              className="widget-content-tab wow fadeInUp"
              data-wow-delay="0.35s"
            >
              <div className="widget-content-inner active">
                <Swiper
                  {...options}
                  modules={[Navigation, Pagination, Autoplay]}
                  onSwiper={(swiper) => {
                    document
                      .querySelector(".popular-courses-next")
                      ?.addEventListener("click", () =>
                        swiper.autoplay.start()
                      );

                    document
                      .querySelector(".popular-courses-prev")
                      ?.addEventListener("click", () =>
                        swiper.autoplay.start()
                      );
                  }}
                  className="swiper-container slider-popular-courses"
                >
                  {filtered.map((elm, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="course-item hover-img style-2 ">
                        <div className="features image-wrap">
                          <Image
                            className="lazyload"
                            alt=""
                            src={elm.imgSrc}
                            width={500}
                            height={600}
                          />
                        </div>
                      </div>
                      <h3
                        className="course-title"
                        style={{
                          textAlign: "center",
                          marginTop: "10px",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        {elm.title}
                      </h3>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="swiper-button-prev btns-style-arrow popular-courses-prev" />
                <div className="swiper-button-next btns-style-arrow popular-courses-next" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
