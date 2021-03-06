import React, { Fragment } from "react";
import About1 from "../components/sections/about-1/About1";
import About2 from "../components/sections/about-2/About2";
import About3 from "../components/sections/about-3/About3";
import PromotionSection from "../components/sections/promotion/PromotionSection";

export default function AboutUs() {
  return (
    <Fragment>
      <About1 />
      <About2 />
      <About3 />
      {/* FIXME: negative margin */}
      <PromotionSection marginTop={-100} marginBottom={181} />
    </Fragment>
  );
}
