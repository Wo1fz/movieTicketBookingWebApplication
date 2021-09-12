import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    padding: '10px',
    margin: '10px',
    backgroundColor: '#d9d9d9',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  cartForm: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    display: 'flex',
  },
  submitButton: {
    marginBottom: 10,
    marginTop: 10,
  },
}))
