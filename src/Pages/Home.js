import React from "react";

import Collection from "../components/Collections/Collection";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-10/12 mx-auto">
        <Collection title="Trending" />
        <Collection title="What's Popular" />
        <Collection title="Top Rated" />
      </div>
    </>
  );
};

export default Home;
