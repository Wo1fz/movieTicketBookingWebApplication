import React from 'react'
import { Container, AppBar, Typography, Zoom, Grid } from '@material-ui/core'

import Cart from './components/Cart/Cart'
import Movies from './components/Movies/Movies'
import ticketLogo from './images/ticket-logo.png'
import useStyles from './styles'

// Main body of the web application
const App = () => {
  const classes = useStyles()

  // Displaying the main content
  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static'>
        <Typography className={classes.heading} variant='h2' align='center'>
          usMovie Ticket Booking
        </Typography>
        <img
          className={classes.image}
          src={ticketLogo}
          alt='movieTicket'
          height='70'
        />
      </AppBar>
      <Zoom in>
        <Container>
          <Grid
            container
            justifyContent='space-between'
            alignItems='stretch'
            spacing={2}
          >
            <Grid item xs={12} lg={7}>
              <Movies />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Cart />
            </Grid>
          </Grid>
        </Container>
      </Zoom>
    </Container>
  )
}

export default App
