import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import { MovieData } from './MovieList';

export type MovieContextType ={
    movies: MovieData[]
    setMovies: Dispatch<SetStateAction<MovieData[]>>
}

export const MovieContext = createContext<MovieContextType>({
   movies: [],
   setMovies: () => {}
})



export const MovieProvider:React.FC = (props) => {
    const [movies, setMovies] = useState<MovieData[]>([
        {
          name: "Harry Potter",
          price: "$10",
          id: 23124,
        },
        {
          name: "Game of Thrones",
          price: "$10",
          id: 2566124,
        },
        {
          name: "Inception",
          price: "$10",
          id: 23524,
        },
      ]);
     return(
        <div>
            <MovieContext.Provider
            value={{
               movies, setMovies
            }}>
                {props.children}</MovieContext.Provider>
        </div>
    );
}
