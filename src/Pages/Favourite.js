import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const Favourite = () => {
    const favourite =useSelector(state => state.favourite)
  return (
    <>
    {
    favourite.length > 0 ? 
        (<div className="container-fluid row row-cols-1 row-cols-md-6 g-3 p-4" >
             {favourite.map(movie => {
            return (
                <MovieCard movie={movie} key={movie.id} />
            )
        })}</div>) : (<div className='vh-100'>
            No Favourite Yet
        </div>)
     }
    </>
  )
}

export default Favourite