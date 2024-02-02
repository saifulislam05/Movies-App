import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[600px] sm:px-2 px-3 max-h-[800px] py-20 bg-cover bg-hero-bg-img text-white mb-14">
      <div className="flex justify-center flex-col">
        {/* Banner Content */}
        <div className="mt-10 ">
          <h1 className=" lg:text-6xl md:text-5xl sm:text-4xl text-3xl max-w-[600px] mx-auto text-center font-extrabold ">
            Welcome.
          </h1>
          <p className="lg:text-2xl md:text-xl text-lg mt-5 font-semibold text-center mx-auto ">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          {/* Banner action  */}
          <div className="mt-5 flex  mx-auto justify-center gap-2 flex-col">
            <div class="flex rounded-lg shadow-sm w-10/12 md:w-5/12 mx-auto">
              <input
                type="text"
                placeholder="Search for the movie or Tv show"
                class="py-3 px-4 block w-full  shadow-sm rounded-s-full text-black disabled:opacity-50 disabled:pointer-events-none outline-none bg-white text-lg"
              />
              <button
                type="button"
                class="py-3 px-9 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-full border border-transparent bg-success hover:opacity-90"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
