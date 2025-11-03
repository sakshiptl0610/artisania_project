import React from "react";
import Image from "next/image";
export default function AboutUs() {
  return (
    <section
      className="section-about-box style-1 tf-spacing-3 pt-0 "
      style={{ backgroundColor: "#fffdf0" }}
    >
      <div className="tf-container ">
        <div className="row items-center" style={{ paddingTop: "30px" }}>
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
                <span
                  className="tf-secondary-color font-cardo
                "
                >
                  Our Journey of Art, Impact, and Empowerment{" "}
                </span>
              </h2>
              <p
                className="text-content wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  fontFamily: " 'DM Sans', sans-serif",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                We are a socially responsible enterprise dedicated to creating a
                meaningful balance between commercial growth and social impact.
                Our work centers on the welfare of tribal artisans and the
                preservation of India’s indigenous art and craft traditions.
                Acting as a bridge between tribal communities and global
                audiences, we connect India’s rich cultural heritage with
                collaborators, collectors, and conscious consumers around the
                world. Our initiatives encompass skill development, design
                innovation, and product diversification — empowering artisans to
                refine their traditional practices while adapting to
                contemporary markets. Through workshops, training programs, and
                design interventions, we nurture creative growth and ensure that
                traditional knowledge continues to evolve with modern
                sensibilities. We also provide cultural exposure to our artists
                by organizing national and international exhibitions and
                workshops. In collaboration with the French NGO Duppata, which
                promotes women’s empowerment and Indian tribal art, we
                participate in an annual month-long cultural event in France
                featuring exhibitions and artist residencies. These initiatives
                foster cross-cultural dialogue and global appreciation for
                India’s tribal artistry. At the heart of our organization is a
                founder deeply committed to sustaining tribal livelihoods,
                nurturing creativity, and safeguarding the living legacy of
                India’s indigenous art forms.
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
