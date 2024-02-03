import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RatingProgress from "../RatingProgress";

const Card = ({ data }) => {
  const {
    id,
    original_title,
    original_name,
    poster_path,
    release_date,
    first_air_date,
    genre_ids,
    vote_average,
  } = data || {};

  const {genres}=useSelector(state=>state.genres)
  
  const genresContent = genre_ids?.slice(0, 2).map((id) => {
    const genre = genres.find((item) => item.id === id);
    return <span key={id}>{genre?.name}</span>; 
  });

  return (
    <div className="card card-compact w-11/12 mx-auto my-2 hover:opacity-80 duration-200">
      <Link to={`/movie/${id}`}>
        <div className=" w-full relative ">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={original_title || original_name}
            className="w-full h-full rounded-2xl  object-fill"
          />
          <div className="type absolute bottom-3 right-2 flex gap-3 *:bg-[#da2f68] text-success-content text-sm font-semibold *:p-1 *:py-0 *:rounded-md">
            {/* <span>Action</span>
            <span>Thriller</span> */}
            {genresContent}
          </div>
          <div className="Rating absolute left-3 -bottom-6  w-14">
            <RatingProgress rating={vote_average} />
          </div>
        </div>

        <div className="card-body mt-4 gap-1">
          <h2 className="card-title">{original_title || original_name}</h2>
          <p>{release_date || first_air_date}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
