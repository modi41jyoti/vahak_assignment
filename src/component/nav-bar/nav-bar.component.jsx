import React from 'react';
import HondaLogo from '../../assets/honda_logo.png';
import Menu from '../../assets/menu.png'
import './nav-bar.scss'

const ButtonAppBarComponent = () => {
  return (
    <div className='wrapper'>
      <img alt="menu" src={Menu} className="menu" />
      <img alt="R" src={HondaLogo} className="large" />
      <img src="img_avatar2.png" alt="Avatar" className="avatar large" />
    </div >
  );
}

export default ButtonAppBarComponent