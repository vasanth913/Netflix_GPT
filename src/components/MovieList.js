import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(movies.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === movies.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    // <div className="flex flex-wrap overflow-x-scroll no-scrollbar">
    <>
      <h1 className="text-lg md:text-2xl py-4 text-white">{title}</h1>
      <div className="flex relative flex-wrap overflow-x-scroll no-scrollbar">
        <div
          className="flex transition ease-out duration-40 gap-2"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}>
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
        {/* <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
          <button onClick={previousSlide}>◀️</button>
          <button onClick={nextSlide}>▶️</button>
        </div> */}
      </div>
    </>
  );
};

export default MovieList;
