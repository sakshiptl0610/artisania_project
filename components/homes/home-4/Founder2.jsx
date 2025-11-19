"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Founder2() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="section-get-started tf-spacing-3 pt-0"
      style={{ backgroundColor: "#fffdf0" }}
    >
      <h2 className="font-cardo fw-7 wow text-center p-3" data-wow-delay="0s">
        Our Founder
      </h2>

      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            {/* ✅ Keeps both sides equal height */}
            <div className="get-started-wrap flex flex-col md:flex-row gap-8 items-stretch">
              {/* LEFT CONTENT */}
              <div className="wrap-content md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2
                    className="font-cardo fw-7 wow fadeInUp mt-3"
                    data-wow-delay="0s"
                  >
                    Padmaja Srivastava
                  </h2>

                  <p
                    className="fs-15 wow fadeInUp text-gray-700 leading-relaxed mt-2"
                    data-wow-delay="0.1s"
                  >
                    Over the years, Padmaja has emerged as a driving force in
                    preserving and promoting India’s rich folk and tribal art
                    heritage. She has curated and organized captivating
                    exhibitions across Pune, Goa, Bombay, and international
                    destinations, bringing indigenous creativity to global
                    audiences. Her passion for nurturing artistic awareness has
                    led her to conduct workshops at prestigious institutions
                    like Welham Girls’ School and The Doon School in Dehradun,
                    as well as The Rachna College for Applied Arts in Mumbai —
                    inspiring young and creative minds to reconnect with
                    traditional Indian art forms. Her tireless dedication has
                    earned international acclaim. For six consecutive years
                    (2012–2016, 2021), Padmaja represented Indian folk art at
                    the International Folk Art Market in Santa Fe, New Mexico,
                    USA — introducing India’s timeless visual storytelling to a
                    worldwide audience. In 2013, she delivered a presentation on
                    the unique “Jangarh Kalam” art form at Galerie Andre Hus in
                    Paris, followed by a keynote at the Indian Embassy in Paris
                    in 2014, where she showcased the works of four tribal women
                    artists from central India. In 2015, she co-authored a
                    French children’s book, “L’Elephant Volant,” reflecting her
                    creative versatility and global outlook. Beyond exhibitions,
                    Padmaja’s collaborations have created meaningful social
                    impact. Partnering with Duppata, an NGO in France, she
                    promotes women’s empowerment by facilitating annual
                    exhibitions of Gond, Warli, Madhubani, and Bhil art.
                  </p>

                  {showMore && (
                    <div className="fs-15 text-gray-700 leading-relaxed space-y-3 mt-3">
                      <p>
                        Her collaboration with the Beatrice Wood Center for Arts
                        in California (2017) and exhibitions of Baiga tribal art
                        in Milan and Paris (2019) have further strengthened her
                        role as a cultural ambassador. She has also worked with
                        global brands like Starbucks, providing Gond artists a
                        platform in their stores, and with Exim Bank of India,
                        curating product development workshops that led to
                        exclusive collections of hand-painted products made by
                        tribal artisans.
                      </p>
                      <p>
                        Her creative collaborations extend into the corporate
                        world — from partnering with Ogilvy & Mather to produce
                        a children’s book on traffic rules for BMW, to designing
                        culturally rich packaging for Hundred Pipers Whisky
                        under Pernod Ricard’s Legacy Project. In 2022, Padmaja
                        co-curated an immersive 3D art experience with
                        Padmashree artist Durgabai Vyam and Floating Canvas for
                        the Mumbai Festival of Lights, as well as folk art for
                        Samsung Frame TV.
                        <br />
                        Padmaja’s commitment to preserving and reimagining
                        traditional art has been recognized by publications such
                        as Business Today and Women’s Era. Currently, she is
                        working on two books — “Tattoo Art of Central India” and
                        a new children’s title illustrated by a Gond artist.
                        Through her work, Padmaja continues to celebrate and
                        elevate the artistic legacy of India’s tribes — building
                        lasting bridges between tradition and modernity,
                        heritage and innovation.
                      </p>
                    </div>
                  )}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="tf-btn wow fadeInUp mt-5 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all self-start"
                  data-wow-delay="0.2s"
                >
                  {showMore ? "Read Less" : "Read More"}{" "}
                  <i className="icon-arrow-top-right ml-2" />
                </button>
              </div>

              {/* RIGHT IMAGE - auto grows with content */}
              <div className="img-right md:w-1/2 flex flex-col justify-between">
                <div className="relative w-full h-full">
                  <Image
                    className="lazyload rounded-xl object-cover"
                    src="/images/page-title/mrs-Padmaja.png"
                    alt="Padmaja Srivastava"
                    width={800}
                    height={600}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "all 0.3s ease-in-out",
                    }}
                  />
                </div>

                {/* ✅ Buttons stay below image */}
                <div className="tags-list style2 mt-4">
                  <ul className="tag-list flex flex-wrap gap-3">
                    <li
                      className="tag-list-item wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <a className="font-outfit" href="#">
                        Cultural Curator
                      </a>
                    </li>
                    <li
                      className="tag-list-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <a className="font-outfit" href="#">
                        Global Collaborator
                      </a>
                    </li>
                    <li
                      className="tag-list-item wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <a className="font-outfit" href="#">
                        Tribal Art Advocate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
