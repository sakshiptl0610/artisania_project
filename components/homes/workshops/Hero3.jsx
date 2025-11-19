"use client";
import Image from "next/image";
import { courses3 } from "@/data/courese";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function Hero() {
  const swiperOptions = {
    spaceBetween: 20,
    observer: true,
    observeParents: true,

    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 1.8,
      },
      992: {
        slidesPerView: 2,
      },
    },
    navigation: {
      clickable: true,
      nextEl: ".page-title-next",
      prevEl: ".page-title-prev",
    },
  };
  return (
    <>
      <div className="page-title-home7">
        <div className="tf-container">
          <div className="row items-center">
            <div className="col-lg-6">
              <div className="content-page-title">
                <div
                  className="widget box-sub-tag wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="sub-tag-icon">
                    <i className="icon-flash" />
                  </div>
                  <div className="sub-tag-title">
                    <p>Gond wall painting Workshop</p>
                  </div>
                </div>
                <h2 className="fw-7 wow fadeInUp" data-wow-delay="0.1s">
                  Rachna Sansad College of Applied Arts, Mumbai, India
                </h2>
                <h6 className="wow fadeInUp" data-wow-delay="0.15s">
                  Students from the Rachna Sansad College of Applied Arts in
                  Mumbai undertook a unique learning experience in the village
                  of Patangarh. They focused on learning to create the
                  traditional Gond wall paintings, specifically the styles known
                  as Digna and Bhittichitra. To preserve and pass on this
                  indigenous knowledge, ten village women were employed to teach
                  the art forms to the students.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="image-page-title">
          <Swiper
            {...swiperOptions}
            modules={[Navigation]}
            className="swiper-container slider-page-title"
          >
            {courses3.slice(0, 6).map((course, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="course-item style-2 has-border has-padding hover-img">
                  <div className="features image-wrap">
                    <Image
                      className="lazyload"
                      // data-src="/images/courses2/courses-01.jpg"
                      alt=""
                      src={course.imgSrc}
                      width={520}
                      height={380}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-bottom">
              <div className="swiper-button-prev btns-style-arrow page-title-prev" />
              <div className="swiper-button-next btns-style-arrow page-title-next" />
            </div>
          </Swiper>
        </div>
      </div>{" "}
    </>
  );
}
