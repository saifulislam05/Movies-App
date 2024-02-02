import React from "react";

const RatingProgress = () => {
  return (
    <div class="relative bg-[#ffffff] rounded-full">
      <svg
        class="h-full w-full p-1"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          class="stroke-current text-gray-200 dark:text-gray-700"
          stroke-width="2"
        ></circle> */}

        <g class="origin-center -rotate-90 transform">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            class="stroke-current text-success "
            stroke-width="3"
            stroke-dasharray="100"
            stroke-dashoffset="30"
          ></circle>
        </g>
      </svg>

      <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span class="text-center text-md font-bold text-gray-800 ">
          7
        </span>
      </div>
    </div>
  );
};

export default RatingProgress;
