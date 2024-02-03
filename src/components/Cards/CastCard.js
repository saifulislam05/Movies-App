import React from "react";

const CastCard = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="rounded-full overflow-hidden w-36 h-36">
        <img
          src="https://image.tmdb.org/t/p/original/fuTEPMsBtV1zE98ujPONbKiYDc2.jpg"
          alt=""
        />
      </div>
      <div className="text-center mt-4">
        <p className="font-semibold">Marion Brando</p>
        <p className="">Don Vito Corleone</p>
      </div>
    </div>
  );
};

export default CastCard;
