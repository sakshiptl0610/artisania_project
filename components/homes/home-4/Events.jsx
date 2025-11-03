"use client";
import { useState, useEffect } from "react";
import { events } from "@/data/events";
import React from "react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

export default function Events() {
  const [title, setTitle] = useState("Upcoming Events");

  useEffect(() => {
    setTitle("Our Products");
  }, []);

  const options = {
    spaceBetween: 28,
    speed: 1000,
    slidesPerView: 4,
    grid: { rows: 2, fill: "row" },
    breakpoints: {
      0: { slidesPerView: 1, grid: { rows: 1 } },
      700: { slidesPerView: 2, grid: { rows: 2 } },
      1024: { slidesPerView: 4, grid: { rows: 2 } },
    },
  };

  return (
    <section
      className="section-event style-2 tf-spacing-3 pt-5"
      style={{ backgroundColor: "#fffdf0" }}
    >
      <div className="tf-container cntnr ">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2
                className="title fw-7 wow fadeInUp font-cardo"
                data-wow-delay="0.1s"
              >
                {title}
              </h2>
              <p className="wow fadeInUp text-center" data-wow-delay="0.2s">
                Where Gond art comes alive—rich, colorful, timeless.
              </p>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <Swiper
              className="swiper-container tf-sw-mobile wow fadeInUp"
              data-wow-delay="0.3s"
              {...options}
              modules={[Navigation, Pagination, Grid]}
            >
              {events.map((event, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="events-item style2 hover-img">
                    <div className="event-item-img image-wrap">
                      <Image
                        className="lazyload"
                        data-src={event.imgSrc}
                        alt={event.alt}
                        src={event.imgSrc}
                        width={658}
                        height={481}
                      />
                    </div>
                    <div className="event-item-content">
                      <div className="event-item-title fw-5 fs-18">
                        <Link href={`/event-single/${event.id}`}>
                          {event.title}
                        </Link>
                        <Link
                          href={`/event-list`}
                          className="tf-btn-arrow wow fadeInUp"
                          data-wow-delay="0.4s"
                          style={{ color: "#8f3e0b", transition: "color 0.3s" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#131836")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#8f3e0b")
                          }
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="event-btn flex justify-center ">
              <Link
                href="/our-products"
                className="tf-btn style-secondary wow fadeInUp"
                data-wow-delay="0.3s"
                style={{ borderRadius: "12px" }}
              >
                <span className="text-yellow-400 font-bold">
                  View All products
                </span>{" "}
                <i className="icon-arrow-top-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
