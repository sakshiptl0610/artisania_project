"use client";
import React, { useState } from "react";
import Link from "next/link";
import { events2 } from "@/data/events";
import Image from "next/image";

export default function Facts() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="section-event section-popular-courses style-7 relative bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg-image/9.png')", 
      }}
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2
                className="title fw-7 font-cardo wow fadeInUp text-white"
                data-wow-delay="0.1s"
                
              >
                Blog
              </h2>
              <p className="wow fadeInUp text-white" data-wow-delay="0.2s" >
                Explore stories, insights, and inspirations from the world of
                Indian art and culture.
              </p>
            </div>

            {/* Grid wrapper */}
            <div className="wrap-item grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {events2.map((event, index) => {
                const isHovered = hovered === index;
                return (
                  <div
                    key={index}
                    data-wow-delay={event.delay}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className={`
                      events-item
                      wow fadeInUp
                      border border-[#8f3e0b]
                      rounded-md
                      overflow-hidden
                      transition-all
                      duration-300
                      max-w-[350px] w-full mx-auto
                    `}
                    style={{
                      backgroundColor: "#fffdf0",
                      cursor: "pointer",
                      transform: isHovered
                        ? "translateY(-8px) scale(1.02)"
                        : "translateY(0) scale(1)",
                      boxShadow: isHovered
                        ? "0 12px 30px rgba(0,0,0,0.15)"
                        : "0 4px 12px rgba(0,0,0,0.04)",
                      transition:
                        "transform 220ms ease-out, box-shadow 220ms ease-out",
                    }}
                  >
                    {/* Image */}
                    <div className="event-item-img border-b border-black/5">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={250}
                        className="rounded-xl object-cover w-full"
                      />
                    </div>

                    {/* Content */}
                    <div className="event-item-content p-4">
                      <div className="event-item-sub flex justify-between items-center">
                        <div className="item-sub-time flex items-center gap-2">
                          <i className="flaticon-calendar" />
                          <p>{event.time}</p>
                        </div>
                      </div>

                      {/* Title & Para */}
                      <div className="event-item-title fw-5 fs-18 mt-2">
                        <Link href={`/event-single/${event.id}`}>
                          {event.title}
                        </Link>
                        <p>{event.para}</p>
                      </div>

                      {/* Button */}
                      <Link
                        href={`/event-single/${event.id}`}
                        className="tf-btn"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          marginTop: 12,
                          color: "#000",
                          transition: "color 200ms",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#8f3e0b")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#000")
                        }
                      >
                        Learn More
                        <i className="icon-arrow-top-right" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
