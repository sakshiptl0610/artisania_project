import React from "react";
import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Hero from "@/components/homes/workshops/Hero";
import Hero2 from "@/components/homes/workshops/Hero2";
import Hero3 from "@/components/homes/workshops/Hero3";
import Hero4 from "@/components/homes/workshops/Hero4";
import Hero5 from "@/components/homes/workshops/Hero5";
import Hero6 from "@/components/homes/workshops/Hero6";
import Hero7 from "@/components/homes/workshops/Hero7";
import WorkTitle from "@/components/homes/workshops/WorkTitle";

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
        <WorkTitle />
        <Hero />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
        <Hero7 />
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
