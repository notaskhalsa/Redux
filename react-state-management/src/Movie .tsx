import React, { FC } from 'react'
import { MovieData } from './MovieList';

const Movie:FC <MovieData> = (props) => {
    const {name, price} = props;
     return(
        <div className='movie'>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
}

export default Movie;