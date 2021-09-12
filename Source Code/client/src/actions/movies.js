import * as api from '../api'

// Get data for all movies
export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMovies()
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.log(error)
  }
}

// Update db for purchase
export const updateSeats = (movieId, updatedSeat) => async (dispatch) => {
  try {
    const { data } = await api.updateSeats(movieId, updatedSeat)
    dispatch({ type: 'UPDATE', payload: data })
  } catch (error) {
    console.log(error)
  }
}
