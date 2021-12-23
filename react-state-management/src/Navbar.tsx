import React, { useContext } from 'react'
import { MovieContext } from './Context';



const Nav = () => {
  const {movies} =useContext(MovieContext)
     return(
         <div className='navbar'>
            <h3>Dev Ed</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    );
}

export default Nav