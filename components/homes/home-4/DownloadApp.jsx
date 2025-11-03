import React from "react";
import Image from "next/image";
export default function DownloadApp() {
  return (
    <section className="section-mobile-app style2 bg-4">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-8">
            <div className="content-left">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>About Gond Art</p>
                </div>
              </div>
              <h2
                className="fw-7 font-cardo wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <span className="tf-secondary-color"> At AAVAKSHA,</span>
                <br />
              </h2>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.3s">
                we believe that art is not just an expression but a connection
                to our roots — a celebration of tradition and a timeless craft
                passed through generations. Our brand is built on a deep
                admiration for India’s indigenous art forms, ensuring that every
                piece we create tells a story of culture, craftsmanship, and
                heritage.{" "}
              </p>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.3s">
                {" "}
                We take pride in curating and designing exclusive art pieces
                that honour India’s rich artistic traditions. From the intricate
                strokes of Gond paintings to the eco-friendly craftsmanship of
                Sabai grass, from handcrafted wooden decor to delicate
                hand-pressed flower art, our collection is a tribute to the
                unparalleled skill and spirit of Indian artisans. Each product
                at AAVAKSHA is a masterpiece, reflecting the vibrant history and
                soulful essence of our land.
              </p>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.3s">
                Our mission is to bridge the gap between traditional
                craftsmanship and contemporary lifestyles, making authentic
                Indian art a part of every home. We work closely with skilled
                artisans, empowering them to preserve their craft while bringing
                their exceptional work to a wider audience.
              </p>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.3s">
                With every purchase from AAVAKSHA, you embrace a piece of
                India’s artistic legacy - handcrafted with love, rooted in
                culture, and meant to be cherished for generations.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pt-lg-5 mt-lg-5 m-0 pt-md-5 p-0">
              <div className="image">
                <Image
                  className="lazyload"
                  data-src="/images/page-title/about-2.png"
                  alt=""
                  src="/images/page-title/about-2.png"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
