import React from "react";

const RatingProgress = ({ rating,bg }) => {
const ratingPercentage = rating * 10;
// Check if rating is an integer
  const displayRating = rating?.toString()?.includes(".")
    ? rating?.toFixed(1)
    : rating;

  return (
    <div className={`relative bg-[${bg?bg:"#ffffff"}] rounded-full`}>
      <svg
        className="h-full w-full p-1"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200 dark:text-gray-700"
          strokeWidth="3"
        ></circle>

        <g className="origin-center -rotate-90 transform">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-success "
            strokeWidth="3"
            strokeDasharray="100"
            strokeDashoffset={100 - ratingPercentage}
          ></circle>
        </g>
      </svg>

      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className={`text-center text-md font-bold ${bg=="white"?"text-gray-800":"text-white"}`}>{displayRating}</span>
      </div>
    </div>
  );
};

export default RatingProgress;
