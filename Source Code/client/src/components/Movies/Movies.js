import React, { useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { useGlobalContext } from '../../context'
import Movie from './Movie/Movie'

// Getting data for all movies
const Movies = () => {
  const { setMovie, movie } = useGlobalContext()
  const movies = useSelector((state) => state.movie)

  // Setting current movie to first movie on list
  useEffect(() => {
    setMovie(movies[0])
  }, [movies, setMovie])

  return !movie ? (
    // Display loading icon
    <CircularProgress />
  ) : (
    // Display all seats for the movie
    <Movie />
  )
}

export default Movies
