import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GOOGLE_API_KEY, API_OPTIONS } from "../utils/constants";
import { loading, addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  // search movie in TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;

  };

  const handleGptSearchClick = async () => {
    //Make an API Call to GPT API and get Movie Results

    dispatch(loading());
    
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      " . only give me names of 5 movies, comma seaprated like the example result ahead. Example Result: Leo, Raw, Golmaal";

    const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // const prompt = "Write a story about a magic backpack."

    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = await response.text();
    const gptMovies = text.split(",");

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // For each movies I will search TMDB API
    const promiseArray = gptMovies.map((movie) => {
      return searchMovieTMDB(movie);
    });

    //[Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);


    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black p-1 grid grid-cols-12 rounded-lg w-1/2"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="col-span-9 p-4 m-4 rounded-lg px-3"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
