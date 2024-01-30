import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 w-[99vw]">
        <h1 className="text-2xl py-4 text-white">{title}</h1>
        <div className="flex flex-wrap overflow-x-scroll no-scrollbar">
          <div className="flex gap-2">
            {
              movies?.map((movie) => {
                return (
                  <MovieCard key={movie.id} posterPath={movie.poster_path} />
                )
              })
            }
          
          </div>
        </div>
    </div>
  );
};

export default MovieList;
