import React from "react";

const Input = ({handleChange, type, placeholder, name, min}) => {
  return  <input
  type={type}
  placeholder={placeholder}
  name={name}
  onChange={(e) => handleChange(e)}
  min={min}
  defaultValue=""
/>
};

export default Input;
