import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Image from "next/image";

import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Artisania || Stories Painted in Dots – The Legacy of Gond Art",
  description:
    "Artisania celebrates India's timeless traditions — from Gond art to Sabai weaving, connecting heritage and modern homes.",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Celebrating Indian Craftsmanship – Handcrafted with Love</p>
        </div>

        <Header1 />

        <div className="main-content page-404">
          {/* section 404 */}
          <section className="page-404-wrap">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="thumds">
                    <Image
                      className="ls-is-cached lazyloaded"
                      data-src="/images/page-title/page-home4-1.png"
                      alt=""
                      src="/images/page-title/page-home4-1.png"
                      width={1536}
                      height={1236}
                    />
                  </div>
                </div>
                <div className="col-lg-4 flex items-center">
                  <div className="errors-404-content">
                    <h3>Oops! It looks like you're lost.</h3>
                    <p>
                      The page you're looking for isn't available. Try to search
                      again or use the go to.
                    </p>
                    <Link className="tf-btn" href={`/`}>
                      Go Back To Homepage <i className="icon-arrow-top-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /section 404 */}
        </div>

        <Footer1 />
      </div>
    </>
  );
}
