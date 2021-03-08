
import React from 'react'
import ButtonAppBar from './component/nav-bar/nav-bar.container'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Card from './component/common/card/card.container'
import Form from './component/form/form.container'

const useStyles = makeStyles({
  oldCar: {
    paddingTop: '30px'
  },
  underBar: {
    width: '70px',
    height: '5px',
    background: 'blue',
    borderRadius: '4px',

  }
})
function App() {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid container>
        <ButtonAppBar />
      </Grid>
      <Grid container justify='center'>
        <Typography variant='h6' className={classes.oldCar}>
          Old Car Available
        </Typography>
      </Grid>
      <Grid container justify='center'>
        <div className={classes.underBar}></div>
      </Grid>
      <Grid container style={{ marginTop: '20px' }} justify='center'>
        <Card />
      </Grid>
      <Grid container justify='center' style={{ marginBottom: '12px' }}>
        <Form />
      </Grid>


    </Grid>
  );
}

export default App;
