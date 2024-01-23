import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute w-screen bg-gradient-to-r from-black aspect-video">
      <h1 className="text-white text-3xl font-bold">{title}</h1>
      <p className="text-white text-lg w-1/4 my-3">{overview}</p>
      <div className="flex gap-2 my-8">
        <button className="bg-white text-black p-2 px-8 text-xl rounded-lg text-center hover:bg-opacity-80">
        <i className="fa fa-play"></i> Play
        </button>
        <button className="bg-gray-400 text-white p-2 px-8 text-xl rounded-lg text-center">
          <i className="fa fa-info-circle"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
