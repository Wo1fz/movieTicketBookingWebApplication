import React from 'react'
import { Typography, Grid, Button, Paper, Container } from '@material-ui/core'

import { useGlobalContext } from '../../context'
import Form from './Form/Form'
import useStyles from './styles'

// Shopping cart for the web application
const Cart = () => {
  const classes = useStyles()
  const { seatsChosen, movie, removeSeat } = useGlobalContext()

  //Displaying the selected seats and the related information
  return movie ? (
    <Container>
      <Paper className={classes.container} elevation={4}>
        <Typography variant='h5' color='primary' align='center'>
          Your Cart
        </Typography>
        {seatsChosen.length > 0 && (
          <Typography variant='subtitle1'>Selected Seats:</Typography>
        )}
        {seatsChosen.map((seat) => (
          <Grid
            container
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            key={seat}
          >
            <Typography>{seat}</Typography>
            <Button color='secondary' onClick={() => removeSeat(seat)}>
              Remove
            </Button>
          </Grid>
        ))}
        <Grid
          container
          direction='row'
          justifyContent='space-around'
          alignItems='center'
        >
          <Typography variant='subtitle1'>
            Total (SGD{movie.seatPrice} per ticket):
          </Typography>
          <Typography variant='h6'>
            S$ {movie.seatPrice * seatsChosen.length}
          </Typography>
        </Grid>
      </Paper>
      {seatsChosen.length ? (
        <Form />
      ) : (
        // No item available in cart
        <Typography
          align='center'
          variant='subtitle1'
          style={{ color: 'white' }}
        >
          Fill up your cart now!
        </Typography>
      )}
    </Container>
  ) : (
    // Data for movie not loaded
    <div
      style={{ alignItem: 'center', alignContent: 'center', color: 'white' }}
    >
      Loading...
    </div>
  )
}

export default Cart
