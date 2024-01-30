import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

//
const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen bg-cover bg-no-repeat object-cover  md:h-full"
          src={BG_URL}
          alt="background_image"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
