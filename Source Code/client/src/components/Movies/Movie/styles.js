import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    padding: '5px',
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    marginBottom: '10px',
  },
  screen: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 20,
    backgroundColor: '#cccccc',
  },
  seats: {
    margin: '35px 0 20px 45px',
    backgroundColor: '#d9d9d9',
  },
  seat: {
    margin: '0 0 2px 0',
    padding: '8px',
    fontWeight: 'bold',
  },
  False: {
    backgroundColor: '#00b33c',
    color: '#0000b3',
  },
  True: {
    backgroundColor: 'red',
    color: 'white',
  },
  icon: {
    display: 'flex',
    borderRadius: 5,
    width: '70px',
    height: '35px',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    fontWeight: 'bold',
  },
}))
