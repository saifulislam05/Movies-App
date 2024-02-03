import React, { useEffect } from 'react'
import Carousel from '../Carousel/Carousel';
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, fetchTopRatedMovies, fetchTrendingMovies } from "../../redux/features/movies/moviesSlice";

const Collection = ({title}) => {
const dispatch = useDispatch();

const { trendingMovies, popularMovies, topRatedMovies } = useSelector((state) => state.movies);

useEffect(() => {
  switch (title) {
    case "Trending":
      if (trendingMovies.data.length === 0) {
        dispatch(fetchTrendingMovies());
      }
      break;
    case "What's Popular":
      if (popularMovies.data.length === 0) {
        dispatch(fetchPopularMovies());
      }
      break;
    case "Top Rated":
      if (topRatedMovies.data.length === 0) {
        dispatch(fetchTopRatedMovies());
      }
      break;
    default:
  }
}, [dispatch, title]);
  
  let content = null;
  let categoryState;

  switch (title) {
    case "Trending":
      categoryState = trendingMovies;
      break;
    case "What's Popular":
      categoryState = popularMovies;
      break;
    case "Top Rated":
      categoryState = topRatedMovies;
      break;
    default:

  }

  if (categoryState.isLoading) content = <p>Loading...</p>;

  if (!categoryState.isLoading && categoryState.isError)
    content = <p className="error">{categoryState.error}</p>;

  if (
    !categoryState.isLoading &&
    !categoryState.isError &&
    categoryState.data?.length > 0
  ) {
    content = <Carousel data={categoryState.data} />;
  }
  return (
    <div className="w-10/12 mx-auto my-14">
      <div className="mb-5 ml-1 ">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="w-full flex gap-6">
        {/* <Carousel data={data} /> */}
        {content }
      </div>
    </div>
  );
}

export default Collection