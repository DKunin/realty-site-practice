import React from 'react'

const Input = (props) => {
  const { type, name, placeholder, value } = props

  return(
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
        />
  )
}

Input.defaultProps = {
    type: 'text'
};


export default Input;
