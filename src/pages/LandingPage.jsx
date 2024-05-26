import React, { useEffect, useRef } from "react";
import ScrollMagic from "scrollmagic";
import HeroSection from "../layouts/HeroSection";
import ProductSection from "../layouts/ProductSection";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <h1 className="p-8 text-4xl text-center font-semibold mt-[100px] mb-[10px]">Our New Product</h1>
      <ProductSection />
    </>
  );
};

export default LandingPage;
