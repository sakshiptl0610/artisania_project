import React from "react";
import Image from "next/image";

export default function DownloadApp() {
  return (
    <section className="section-mobile-app style2 bg-4 custom-pt">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="pb-5">
              <h2
                className="fw-7 font-cardo wow fadeInUp mb-3"
                data-wow-delay="0.2s"
              >
                <span className="tf-secondary-color ">Empowering By</span>
                <br />
              </h2>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.3s">
                With our focus on innovative solutions, Gaia Tree aims to
                address the problem of cultural degeneration and the loss of art
                of storytelling. Our goal is to create a platform for
                traditional art forms to flourish and to inspire younger
                generations to take an interest in preserving their cultural
                heritage.{" "}
              </p>
              <p className="fs-15 wow fadeInUp" data-wow-delay="0.3s">
                {" "}
                We believe that by fostering a deeper appreciation and
                understanding of diverse cultures through art, we can create a
                more harmonious and connected world. For the last twenty years
                we have developed strong partnerships with indigenous artists
                across India and have successfully introduced their exceptional
                art at a global level. By bringing attention to the remarkable
                skills and traditional art forms of these communities, we aim to
                create sustainable economic opportunities for indigenous artists
                and help preserve their cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
