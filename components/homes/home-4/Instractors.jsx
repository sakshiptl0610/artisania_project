"use client";
import { instructors } from "@/data/instractors";
import { Navigation, Pagination, Grid } from "swiper/modules"; 
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid"; 

export default function Instructors() {
  const options = {
    spaceBetween: 25,
    speed: 1000,
    slidesPerView: 5, 
    grid: {
      rows: 2, 
      fill: "row",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        grid: { rows: 1 },  
      },
      700: {
        slidesPerView: 2,
        grid: { rows: 1 },   
      },
      1000: {
        slidesPerView: 3,
        grid: { rows: 2 },   
      },
      1440: {
        slidesPerView: 5,
        grid: { rows: 2 },
      },
    },
  };

  return (
    <section
      className="section-instructor"
      style={{
        backgroundColor: "#fffdf0",
      }}
    >
      <div className="tf-container cntnr">
        <div className="row">
          <div className="col-12">
            {/* Heading */}
            <div className="heading-section text-center">
              <h2
                className="title fw-7 font-cardo wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Gallery
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                A glimpse into our handcrafted collections that celebrate India’s art and tradition.
              </p>
            </div>

            {/* Swiper Slider */}
            <Swiper
              className="swiper-container slider-courses-5 wow fadeInUp"
              style={{
                marginTop: "40px",
                paddingBottom: "30px",
              }}
              data-wow-delay="0.3s"
              {...options}
              modules={[Navigation, Pagination, Grid]}
            >
              {instructors.map((instructor, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="instructors-item hover-img style-column"
                    style={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <div className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src={instructor.imgSrc}
                        alt={instructor.alt}
                        src={instructor.imgSrc}
                        width={520}
                        height={521}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ✅ Centered Button */}
          <div className="col-12 flex justify-center mt-6">
            <Link
              href={`/event-list`}
              className="tf-btn-arrow wow fadeInUp"
              data-wow-delay="0.4s"
            >
            Explore The Gallery
              <i className="icon-arrow-top-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
