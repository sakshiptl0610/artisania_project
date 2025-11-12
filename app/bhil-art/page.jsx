import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import PageTitle3 from "@/components/homes/bhil-art/PageTitle3";
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
        <PageTitle3 />
        <Blogs1 />
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
