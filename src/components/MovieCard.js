import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return <div className="w-40">
    <img alt="img card" src={IMG_CDN_URL + posterPath}></img>
  </div>;
};

export default MovieCard;
