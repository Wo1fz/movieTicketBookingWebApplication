import React, { useState } from 'react'
import { Typography, Paper, TextField, Button } from '@material-ui/core'
import emailjs from 'emailjs-com'
import { useDispatch } from 'react-redux'
import validator from 'validator'

import { updateSeats } from '../../../actions/movies'
import { useGlobalContext } from '../../../context'
import useStyles from './styles'

// Form for user to input their basic information
const Form = () => {
  const classes = useStyles()
  const { seatsChosen, setSeatsChosen, movie } = useGlobalContext()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  let cart = []
  let isTaken = false
  let formValidated = false

  // Clear all data in form
  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
    })

    setSeatsChosen([])
    formValidated = false
    isTaken = false
  }

  // Update item in cart to prepare to send to database and clear the pending values
  const clearCart = () => {
    seatsChosen.map((chosen) =>
      cart.allSeats.map((cartItem) =>
        cartItem.id === chosen
          ? (cartItem.seatOccupied = 'True')
          : cartItem.seatOccupied
      )
    )

    setSeatsChosen([])
  }

  // Validate name and email are valid
  const formValidation = () => {
    if (formData.name === '') {
      formValidated = false
      alert('Please input your name.')
    } else if (!validator.isEmail(formData.email)) {
      formValidated = false
      alert('Please input valid email.')
    } else if ((formData.name !== '') & validator.isEmail(formData.email)) {
      formValidated = true
    }
  }

  // Purchase confirmed
  const confirmPurchase = () => {
    // Clear pending seat and prepare the payload
    clearCart()
    // Dispatch the seats to database
    dispatch(updateSeats(1, cart))

    // Send Confirmation email to user
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        {
          name: formData.name,
          email: formData.email,
          movieName: movie.movieName,
          movieDateTime: movie.movieDateTime,
          seatsNo: seatsChosen,
        },
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          alert(
            'Confirmation email has been send to your email address',
            result.text
          )
        },
        (error) => {
          alert('Error sending email', error.text)
        }
      )
  }

  // Handle form submit to purchase seats
  const handlePurchaseSeats = (e) => {
    e.preventDefault()

    // Check latest seats details for data consistency
    seatsChosen.map((seatChosen) =>
      movie.allSeats.map((seat) =>
        seat.id === seatChosen && seat.seatOccupied === 'True'
          ? (isTaken = true)
          : null
      )
    )

    // Form data validation
    formValidation()

    // Finilizing purchase
    if (isTaken === true) {
      // Seat is taken
      alert(
        'One or more of the seats chosen are taken by others. You should pick another seats.'
      )
      clearForm()
    } else if ((isTaken === false) & (formValidated === true)) {
      // Seat is open for purchase
      cart = movie
      confirmPurchase()
      clearForm()
    }
  }

  return (
    <div>
      <Paper elevation={4} className={classes.container}>
        <Typography variant='h5' color='primary' align='center'>
          Your Information
        </Typography>
        <form
          className={`${classes.root} ${classes.cartForm}`}
          autoComplete='off'
          noValidate
          onSubmit={handlePurchaseSeats}
        >
          <TextField
            required
            name='name'
            variant='outlined'
            label='Name'
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            required
            name='email'
            variant='outlined'
            label='Email'
            fullWidth
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Button
            className={classes.submitButton}
            size='large'
            color='primary'
            variant='contained'
            type='submit'
            fullWidth
          >
            Purchase Now
          </Button>
        </form>
      </Paper>
    </div>
  )
}

export default Form
