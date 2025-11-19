import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="page-title-home4 pth4"
      style={{ backgroundColor: "#fffdf0" }}
    >
      <div className="image-bg">
        <div className="image2">
          <Image alt="" src="/images/item/item-6.png" width={178} height={74} />
        </div>

        <div className="image5">
          <Image
            alt=""
            src="/images/item/item-9.png"
            width={1494}
            height={1109}
          />
        </div>
      </div>

      <div className="tf-container">
        <div className="row items-center">
          <div className="col-lg-7">
            <div className="content">
              <h1
                className="fw-7 font-cardo wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <span className="tf-secondary-color">
                  Preserving India’s Fading &nbsp;
                </span>
                <br />
                Legacy of Art and Craft
              </h1>
              <h6 className="wow fadeInUp" data-wow-delay="0.2s">
                India’s traditional arts and crafts carry centuries of
                storytelling, culture, and lived experiences. But with rising
                modernization and shifting consumer habits, these precious
                skills are fading. Younger generations are moving away from
                traditional crafts, making it crucial to preserve and revive
                these heritage practices.
              </h6>
              <div className="bottom-btns wow fadeInUp" data-wow-delay="0.3s">
                <a
                  href="#"
                  className="tf-btn style-secondary"
                  style={{
                    fontFamily: " 'DM Sans', sans-serif",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Explore Gond Art
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 deer flex justify-end content">
            <Image
              className="lazyload"
              src="/images/page-title/page-title-home4-1.png"
              alt=""
              width={600}
              height={540}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
