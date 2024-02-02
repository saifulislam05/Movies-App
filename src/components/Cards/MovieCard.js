import React from "react";
import { Link } from "react-router-dom";
import RatingProgress from "../RatingProgress";

const MovieCard = () => {
    return (
      <div className="card card-compact w-11/12 mx-auto shadow-md">
        <Link to={`/movie/1`}>
          <div className=" w-full relative ">
            <img
              src="https://image.tmdb.org/t/p/original/A7EByudX0eOzlkQ2FIbogzyazm2.jpg"
              alt="Shoes"
              className="w-full h-full rounded-2xl  object-fill"
            />
            <div className="type absolute bottom-3 right-2 flex gap-3 *:bg-[#da2f68] text-success-content text-sm font-semibold *:p-1 *:py-0 *:rounded-md">
              <span>Action</span>
              <span>Thriller</span>
            </div>
            <div className="Rating absolute left-3 -bottom-6  w-14">
              <RatingProgress />
            </div>
          </div>

          <div className="card-body mt-4 gap-1">
            <h2 className="card-title">The Beekeeper</h2>
            <p>Jan 10,2024</p>
          </div>
        </Link>
      </div>
    );
};

export default MovieCard;
