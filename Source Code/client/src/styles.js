import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    borderRadius: 15,
    margin: '30px 0 40px',
    padding: '10px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    fontSize: '46px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },
  image: {
    marginLeft: '20px',
  },
}))
