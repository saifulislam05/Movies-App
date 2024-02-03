import React, { useEffect } from "react";
import Card from "../components/Cards/Card";
import MultiSelector from "../components/MultiSelector/MultiSelector";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/features/movies/moviesSlice";

const Movies = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movies);
  useEffect(() => {
    if (movies.data.length === 0) {
      dispatch(fetchMovies())
    }
  }, []);
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
        {movies?.data.map(movie => {
          return <Card key={movie.id} data={movie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
