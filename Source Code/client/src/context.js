import React, { useState, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getMovies } from './actions/movies'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const dispatch = useDispatch()

  // Data of the seats chosen by the user
  const [movie, setMovie] = useState()
  const [seatsChosen, setSeatsChosen] = useState([])

  // Fetch seats data
  useEffect(() => {
    dispatch(getMovies())
  }, [seatsChosen, dispatch])

  // Removing seat from the cart
  const removeSeat = (seat) => {
    setSeatsChosen(seatsChosen.filter((item) => item !== seat))
  }

  return (
    <AppContext.Provider
      value={{
        seatsChosen,
        setSeatsChosen,
        movie,
        setMovie,
        removeSeat,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
