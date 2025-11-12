import React from "react";
import Image from "next/image";
export default function GetStarted() {
  return (
    <section
      className="section-get-started style5 tf-spacing-10"
      style={{ backgroundColor: "#fffdf0" }}
    >
      <div className="tf-container ">
        <div className="row">
          <div className="col-md-5">
            <div className="getstared-image">
              <Image
                className="lazyload"
                data-src="/images/page-title/why-we-do-this.png"
                alt=""
                src="/images/page-title/why-we-do-this.png"
                width={1282}
                height={1128}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="getstared-content">
              <div className="box-sub-tag wow fadeInUp" data-wow-delay="0.1s">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>Why We Are Doing This </p>
                </div>
              </div>
              <h2
                className="tf-secondary-color font-cardo fw-7 wow fadeInUp mt-5"
                data-wow-delay="0.1s"
              >
                Affecting Change
              </h2>
              <p className="wow fadeInUp mb-4" data-wow-delay="0.2s">
                India’s art and craft traditions are not just creative
                expressions — they are living legacies carrying the soul of our
                culture. For centuries, artisans have told stories through
                colors, threads, wood, and clay, preserving the spirit of their
                land in every piece they create. Each artwork reflects identity,
                emotion, and ancient wisdom — a conversation between the artist
                and their heritage.
              </p>
              <p className="wow fadeInUp mb-4" data-wow-delay="0.3s">
                But in today’s fast-paced world, these voices are fading. Mass
                production and machine-made goods have taken over, pushing
                authentic craftsmanship to the margins. Many artisans are
                abandoning their ancestral art, forced to choose modern jobs
                over cultural preservation. As traditions fade, we lose not just
                art — but generations of stories and spirituality.
              </p>
              <p className="wow fadeInUp mb-4" data-wow-delay="0.4s">
                Behind every handmade creation lies the heartbeat of a
                community. These crafts are their lifeline, yet most artisans
                struggle to earn what their talent deserves. Cheap, factory-made
                imitations have devalued originality, leaving real creators
                unseen and undervalued. It’s time to restore balance — to give
                dignity and recognition to those who keep our heritage alive.
              </p>
              <p className="wow fadeInUp mb-4" data-wow-delay="0.5s">
                True change begins when we choose consciously. When we value
                handmade over machine-made, we protect not just art but an
                entire way of life. Supporting artisans means empowering
                communities and ensuring that India’s timeless spirit continues
                to shine — beautifully, proudly, and forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
