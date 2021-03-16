import React from "react";
import './button.scss'


const Button = (props) => {
  const { text, onClick, style } = props;


  return (
    <button className='button' type="button" onClick={onClick} className='button' style={style}>{text}</button>
  );
}

export default Button;