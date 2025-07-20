import React from "react";
import Hero from "../src/Components/Hero";
import FeaturedDestination from "../src/Components/FeaturedDestination";
import ExclusiveOffers from "../src/Components/ExclusiveOffers";
import Testimonial from "../src/Components/Testimonial";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
    </>
  );
}

export default Home;
