import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Cards/Card';
import Filter from '../components/Filter/Filter';
import { fetchGenres } from '../redux/features/generes/genresSlice';
import { fetchTvShows } from '../redux/features/tvShows/tvShowsSlice';

const TvShows = () => {
  const dispatch = useDispatch();

  const { tvShows } = useSelector((state) => state.tvShows);
  const { selectedGenres, sortBy } = useSelector((state) => state.filter);
    const { genres } = useSelector((state) => state.genres);

  if (genres.length === 0) {
    console.log(genres);
    dispatch(fetchGenres("tv"));
  }
  useEffect(() => {
    if (tvShows.data.length === 0) {
      dispatch(fetchTvShows());
    }
  }, []);
  useEffect(() => {
    dispatch(fetchTvShows({ genres: selectedGenres, sortBy }));
  }, [selectedGenres, sortBy, dispatch]);
  return (
    <div className="w-10/12 mx-auto my-14">
      <div className="mb-14 ml-1 flex justify-between">
        <h2 className="text-2xl font-semibold">Explore Tv Shows</h2>
        <Filter/>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center ">
        {tvShows?.data.map((movie) => {
          return <Card key={movie.id} data={movie} />;
        })}
        
      </div>
    </div>
  );
}

export default TvShows