import React, { useContext, useState } from "react";
import { MovieContext } from "./Context";
import Movie from "./Movie ";


export type MovieData = {
  name: string;
  price: string;
  id: number;
};

const MovieList = () => {
  const {movies} =useContext(MovieContext)
  return (
    <div>
      {/* <h1>{value}</h1> */}
      {movies.map((movie: MovieData) => (
       <Movie name={movie.name} price={movie.price} id={movie.id} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
