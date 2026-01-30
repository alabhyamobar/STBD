import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
// import ServicesSection from "./ServicesSection";
import ProductsPreview from "./ProductsPreview";
// import AboutSection from "./AboutSection";
// import CTASection from "./CTASection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProductsPreview />
    </main>
  );
};

export default Home;
