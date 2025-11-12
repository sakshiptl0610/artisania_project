import React from "react";
export default function PageTitle({
  parentClass = "page-title style-2 no-border has-bg4 ",
}) {
  return (
    <div className={parentClass}>
      <div className="tf-container pt-5 mt-5">
        <div className="row">
          <div className="col-12">
            <div className="content">
              <h2 className="font-cardo fw-7 text-center">Our Products</h2>
              <p className="text-center">
                Handcrafted Gond art products that blend tribal tradition with
                modern elegance — vibrant, soulful, and full of stories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
