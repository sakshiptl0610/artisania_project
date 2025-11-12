import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";

import GondTitle from "@/components/homes/gond-art/gondtitle";
import Blogs1 from "@/components/homes/our-products/Blogs1";

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
        <GondTitle />
        <Blogs1 />
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
