const movie = (seats = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'UPDATE':
      return action.payload
    default:
      return seats
  }
}

export default movie
