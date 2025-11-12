import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Blogs1 from "@/components/homes/our-products/Blogs1";
import WarliTitle from "@/components/homes/warli-art/WarliTitle";

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
        <WarliTitle />
        <Blogs1 />
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
