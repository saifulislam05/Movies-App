import React from "react";
import CastCard from "../Cards/CastCard";

const CastList = ({ cast }) => {
  return (
    <div className="my-7">
      <h2 className="text-2xl font-semibold w-fit mb-4">Top Cast</h2>
      <div className="w-full grid grid-cols-7 gap-6">
        {cast.map((member) => (
          <CastCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default CastList;
