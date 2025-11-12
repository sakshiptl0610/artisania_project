import React from "react";
import Header4 from "@/components/headers/Header4";
import Hero from "@/components/homes/home-4/Hero";
import Events from "@/components/homes/home-4/Events";
import Facts from "@/components/homes/home-4/Facts";
import Testimonials from "@/components/homes/home-4/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import AboutUs from "@/components/homes/home-4/AboutUs";
import DownloadApp from "@/components/homes/home-4/DownloadApp";

export const metadata = {
  title: " AAVAKSHA",
  description:
    " AAVAKSHA blends tradition and creativity with handmade, timeless crafts",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header4 />
        <Hero />
        <div className="main-content pt-0">
          <AboutUs />
          <DownloadApp />
          <Events />
          {/* <Instractors /> */}
          <Facts />
          <Testimonials />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
