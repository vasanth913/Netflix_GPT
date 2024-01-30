import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { loading, movieResults, movieNames } = useSelector(
    (store) => store.gpt
  );

  if (!movieNames) {
    return <Shimmer />;
  }

  return (
    <div className="p-4 m-4 bg-black bg-opacity-80 text-white max-w-screen-2xl">
      {
        movieNames && movieNames.map((movieName, index) => {
          return (
            <div key={movieName}>
              <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
            </div>
          )
        })
      }
    </div>
  );
};

export default GptMovieSuggestions;
