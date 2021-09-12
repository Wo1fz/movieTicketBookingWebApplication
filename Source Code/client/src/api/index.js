import axios from 'axios'
import rateLimit from 'axios-rate-limit'

const url = 'https://ticketbookingapi-my.herokuapp.com/movies'

// Rate limiting
const request = rateLimit(axios.create(), {
  maxRequests: 5,
  perMilliseconds: 1000,
  maxRPS: 2,
})

// Fetch all movie data
export const fetchMovies = () => request.get(url)

// Update db for purchase
export const updateSeats = (movieId, updatedSeat) =>
  request.patch(`${url}/purchase/${movieId}`, updatedSeat)
