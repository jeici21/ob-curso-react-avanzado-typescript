import React from 'react'
import './Button.css'

const Button = ({ color = "blue" }) => <><button className={`btn ${color}`}>Botón</button></>

export default Button