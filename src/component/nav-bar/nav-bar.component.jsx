import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import HondaLogo from '../../assets/honda_logo.png';


import useStyles from './nav-bar.style.js'

const ButtonAppBarComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" >
        <Toolbar style={{ justifyContent: 'space-between' }} className={classes.bar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Avatar alt="R" src={HondaLogo} className={classes.large} />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBarComponent