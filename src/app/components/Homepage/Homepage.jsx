import React from "react";
import HeroSection from "./Sections/HeroSection";
import Services from "./Sections/Services";
import AboutUs from "./Sections/AboutUs";
import Footer from "@/app/Layout/Footer";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Homepage;
