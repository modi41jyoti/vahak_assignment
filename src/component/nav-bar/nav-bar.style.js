import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: 'white',
    color: 'black'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    paddingTop: '15px'
  },
}));

export default useStyles;