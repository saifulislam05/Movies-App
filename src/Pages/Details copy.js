import React from "react";
import CastCard from "../components/Cards/CastCard";
import OfficialVideo from "../components/Cards/OfficialVideo";
import Collection from "../components/Collections/Collection";
import RatingProgress from "../components/RatingProgress";
import playBtn from "../images/play-btn.svg";
const Details = () => {
  return (
    <div className="w-10/12 mx-auto my-14 flex flex-wrap">
      {/* Details */}
      <div className=" flex flex-wrap">
        <div className="w-4/12">
          <div className="w-9/12 mx-auto ">
            <img
              src="https://image.tmdb.org/t/p/original/A7EByudX0eOzlkQ2FIbogzyazm2.jpg"
              alt=""
              className="w-full rounded-xl"
            />
          </div>
        </div>
        <div className="w-8/12 flex flex-col gap-6 ">
          <div className="">
            <h1 className="text-3xl font-bold ">The Beekeeper - 2024 </h1>
            <p className="font-semibold">
              Expose the corruption. protext the hive.
            </p>
            <div className="flex gap-2 *:bg-[#da2f68] text-success-content text-sm font-semibold *:p-1 *:py-0 *:rounded-md">
              <span>Action</span>
              <span>Comedy</span>
            </div>
          </div>
          <div className="flex gap-5 *:w-20">
            <div className="">
              <RatingProgress rating={7} bg="transparent" />
            </div>
            <img src={playBtn} alt="" srcset="" />
          </div>
          <div className="">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-sm">
              One man’s campaign for vengeance takes on national stakes after he
              is revealed to be a former operative of a powerful and clandestine
              organization known as Beekeepers.
            </p>
          </div>

          <div className="flex flex-col gap-3 *:border-b-[1px] *:border-b-slate-600 *:pb-2">
            <div className="flex gap-4 *:w-fit">
              <div>
                <span className="font-semibold">Status: </span>
                <span className="text-slate-500">Released</span>
              </div>
              <div>
                <span className="font-semibold">Release Date: </span>
                <span className="text-slate-500">jan 10, 2014</span>
              </div>
              <div>
                <span className="font-semibold">Runtime: </span>
                <span className="text-slate-500">1h 45m</span>
              </div>
            </div>
            <div className="">
              <span className="font-semibold">Director: </span>
              <span className="text-slate-500">saiful</span>
            </div>
            <div className="">
              <span className="font-semibold">Director: </span>
              <span className="text-slate-500">saiful</span>
            </div>
          </div>
        </div>
      </div>
      {/* Top Cast */}
      <div className="my-7">
        <div className="mb-5 ml-1 flex justify-between items-center">
          <h2 className="text-2xl font-semibold w-fit">Top Cast</h2>
        </div>
        <div className="w-full grid grid-cols-7 gap-6">
          <CastCard />
          <CastCard />
          <CastCard />
          <CastCard />
          <CastCard />
          <CastCard />
          <CastCard />
        </div>
      </div>
      {/* Official Videos */}
      <div className="my-7">
        <div className="mb-5 ml-1 flex justify-between items-center">
          <h2 className="text-2xl font-semibold w-fit">Official Videos</h2>
        </div>
        <div className="w-full grid grid-cols-5 gap-6">
          <OfficialVideo />
          <OfficialVideo />
          <OfficialVideo />
          <OfficialVideo />
          <OfficialVideo />
        </div>
      </div>
       {/* Similar Movies */}
      <Collection title="Similar Movies" />
      {/* Recommendations */}
      <Collection title="Recommendations" />
    </div>
  );
};

export default Details;
