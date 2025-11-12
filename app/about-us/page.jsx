import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import AboutUs from "@/components/homes/home-4/AboutUs";
import Founder1 from "@/components/homes/home-4/Founder1";
import Founder2 from "@/components/homes/home-4/Founder2";

import React from "react";

export const metadata = {
  title: " AAVAKSHA",
  description:
    "AAVAKSHA blends tradition and creativity with handmade, timeless crafts",
};
export default function page() {
  return (
    <>
      <Header4 />
      <div id="wrapper">
        <div
          class="page-title style-2 no-border has-bg4 "
          style={{ backgroundColor: "#e4d3ac" }}
        >
          <div className="tf-container pt-5 mt-5">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h2 className="font-cardo fw-7 text-center">About Us</h2>
                  <p className="text-center">
                    Empowering artisans, preserving culture, and connecting
                    tradition with the modern world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AboutUs />
        <Founder2 />
        {/* <Founder1 /> */}
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
