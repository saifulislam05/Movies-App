// MovieInfo.js
import React from "react";
import RatingProgress from "../RatingProgress";
import playBtn from "../../images/play-btn.svg";

const MovieInfo = ({ movie }) => {
  // Assuming movie is an object containing all necessary movie details
  return (
    <div className="flex flex-wrap">
      <div className="w-4/12">
        <div className="w-9/12 mx-auto ">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full rounded-xl"
          />
        </div>
      </div>
      <div className="w-8/12 flex flex-col gap-6 ">
        <h1 className="text-3xl font-bold ">
          {movie.title} - {movie.year}
        </h1>
        <p className="font-semibold">{movie.tagline}</p>
        <div className="flex gap-2">
          {movie.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
        <div className="flex gap-5 *:w-24">
          <RatingProgress rating={movie.rating} bg="transparent" />
          <img src={playBtn} alt="Play button" />
        </div>
        <Overview movie={movie} />
        <MovieDetails movie={movie} />
      </div>
    </div>
  );
};

const Overview = ({ movie }) => (
  <div>
    <h2 className="text-xl font-semibold">Overview</h2>
    <p className="text-sm">{movie.overview}</p>
  </div>
);

const MovieDetails = ({ movie }) => (
  <div className="flex flex-col gap-3">
    <div className="flex gap-4">
      <Detail title="Status" content={movie.status} />
      <Detail title="Release Date" content={movie.releaseDate} />
      <Detail title="Runtime" content={movie.runtime} />
    </div>
    {movie.directors.map((director) => (
      <Detail key={director} title="Director" content={director} />
    ))}
  </div>
);

const Detail = ({ title, content }) => (
  <div>
    <span className="font-semibold">{title}: </span>
    <span className="text-slate-500">{content}</span>
  </div>
);

export default MovieInfo;
