import React from "react";

export default function CustomInput(props) {
  const { name, label, value, onChange, style } = props;
  return (
    <div style={{ display: 'flex' }}>
      <input type="text" placeholder={label} name={name} value={value} onChange={onChange} style={style} />
    </div >

  );
}
