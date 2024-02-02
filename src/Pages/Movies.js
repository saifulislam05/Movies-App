import React from "react";
import MovieCard from "../components/Cards/MovieCard";
import MultiSelector from "../components/MultiSelector/MultiSelector";

const Movies = () => {
  return (
    <div className="w-10/12 mx-auto my-14">
      <div className="mb-14 ml-1 flex justify-between">
        <h2 className="text-2xl font-semibold">Explore Movies</h2>
        <div className=" flex justify-between gap-8">
          <div className="">
            <MultiSelector placeholder="Select Generes" />
          </div>
          <div className="">
            <MultiSelector placeholder="Sort By" />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center ">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Movies;
