import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

//
const GptSearch = () => {
  return (
      <div>
        <div className="fixed -z-10 h-full" >
            <img src={BG_URL} alt="background_image"/>
        </div> 
        <GptSearchBar/>
        <GptMovieSuggestions/>
      </div>
  )
};

export default GptSearch;
