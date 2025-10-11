import React from "react";
import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="section-about-box style-1 tf-spacing-3 pt-0 "
      style={{ backgroundColor: "#fffdf0" }}
    >
      <div className="tf-container ">
        <div className="row items-center" style={{ paddingTop:"30px" }}>
          <div className="col-md-6 col-lg-7">
            <div className="box-img">
              <div className="wrap-image-agent">
                <div className="image d-none d-lg-block d-sm-none">
                  <Image
                    className="lazyload"
                    data-src="/images/section/3.png"
                    alt=""
                    src="/images/section/3.png"
                    width={335.91}
                    height={495.75}
                  />
                </div>
              </div>
              <div className="wrap-images">
                <div className="image  d-none d-lg-block d-sm-none">
                  <Image
                    className="lazyload"
                    data-src="/images/section/4.png"
                    alt=""
                    src="/images/section/4.png"
                    width={340}
                    height={340}
                  />
                </div>
                <div className="image d-none d-lg-block d-sm-block">
                  <Image
                    className="lazyload"
                    data-src="/images/section/5.png"
                    alt=""
                    src="/images/section/5.png"
                    width={340}
                    height={340}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="content-wrap">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>About Us </p>
                </div>
              </div>
              <h2
                className="title-content fw-7  wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <span className="tf-secondary-color font-cardo
                " >At Artisania, </span>
              </h2>
              <p className="text-content wow fadeInUp" data-wow-delay="0.3s" style={{
                fontFamily: " 'DM Sans', sans-serif",
                color: "black",
                textDecoration: "none",
              }}  >
                We believe art is more than expression—it’s a connection to our roots and a celebration of India’s timeless traditions.

                From Gond paintings to Sabai grass weaving, from handcrafted wooden décor to pressed flower art, every piece we curate reflects the skill, spirit, and heritage of Indian artisans.

                Our mission is to bring authentic Indian craftsmanship into modern homes while empowering artisans to preserve and share their legacy.

                With every purchase, you embrace a piece of India’s culture—handmade with love, rooted in tradition, and crafted to be cherished for generations.
              </p>
              <a
                className="tf-btn style-secondary wow fadeInUp"
                data-wow-delay="0.4s"
                href="#"
                style={{
                  fontFamily: " 'DM Sans', sans-serif",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Learn More
                <i className="icon-arrow-top-right" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
