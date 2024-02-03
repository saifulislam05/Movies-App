// VideoList.js
import React from "react";
import OfficialVideo from "../Cards/OfficialVideo";

const VideoList = ({ videos }) => {
  return (
    <div className="my-7">
      <h2 className="text-2xl font-semibold w-fit mb-4">Official Videos</h2>
      <div className="w-full grid grid-cols-5 gap-6">
        {videos.map((video) => (
          <OfficialVideo key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
