import React, { useState, useEffect } from 'react'
import { Button, Paper, Grid, Typography } from '@material-ui/core'

import { useGlobalContext } from '../../../context'
import useStyles from './styles'

// Displaying seats for one movie
const Seats = () => {
  const classes = useStyles()
  const { seatsChosen, setSeatsChosen, movie } = useGlobalContext()

  const [column, setColumn] = useState(0)

  // Checking for seats status after being clicked and pass the selected seat's id for cart
  const onClick = (seatId, occupied) => {
    if (occupied === 'False') {
      if (!seatsChosen.includes(seatId)) {
        setSeatsChosen([...seatsChosen, seatId])
      } else {
        alert(
          "You've already added this seat to your cart. Choose another seat."
        )
      }
    } else
      alert("The seat you've chosen is already taken. Choose another seat.")
  }

  // Set initial cart and check for maximum number of column
  useEffect(() => {
    movie.allSeats.map(
      (seat) => seat.id.charAt(1) > column && setColumn(seat.id.charAt(1))
    )
  }, [movie, column])

  return (
    // Display all the seats after getting the data
    <>
      <Typography variant='h4' color='primary' align='center' gutterBottom>
        -- {movie.movieName} --
      </Typography>
      <Typography variant='h5' color='secondary' align='center' gutterBottom>
        -- {movie.movieDateTime} --
      </Typography>
      <Paper className={classes.container} elevation={4}>
        <Paper className={classes.screen} elevation={2}>
          Screen
        </Paper>
        <Paper className={classes.seats} elevation={0}>
          {movie.allSeats.map((seat, index) =>
            column === seat.id.charAt(1) ? (
              <React.Fragment key={index}>
                <Button
                  size='small'
                  className={`${classes.seat} ${classes[seat.seatOccupied]}`}
                  style={
                    seatsChosen.includes(seat.id)
                      ? {
                          color: 'yellow',
                          backgroundColor: 'black',
                        }
                      : {}
                  }
                  key={seat.id}
                  onClick={(e) => onClick(seat.id, seat.seatOccupied)}
                >
                  {seat.id}
                </Button>
                <br />
              </React.Fragment>
            ) : (
              <Button
                size='small'
                className={`${classes.seat} ${classes[seat.seatOccupied]}`}
                style={
                  seatsChosen.includes(seat.id)
                    ? {
                        color: 'yellow',
                        backgroundColor: 'black',
                      }
                    : {}
                }
                key={seat.id}
                onClick={() => onClick(seat.id, seat.seatOccupied)}
              >
                {seat.id}
              </Button>
            )
          )}
        </Paper>
      </Paper>
      <Grid
        container
        direction='row'
        justifyContent='space-around'
        alignItems='center'
        className={classes.container}
      >
        <Grid>
          <Grid className={`${classes.icon} ${classes.False}`}>XX</Grid>
          <Grid>Available Seat</Grid>
        </Grid>
        <Grid>
          <Grid
            className={classes.icon}
            style={{ color: 'yellow', backgroundColor: 'black' }}
          >
            XX
          </Grid>
          <Grid>Selected Seat</Grid>
        </Grid>
        <Grid>
          <Grid className={`${classes.icon} ${classes.True}`}>XX</Grid>
          <Grid>Unavailable Seat</Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Seats
