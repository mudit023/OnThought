import React from 'react'
import classes from './Wrapper.module.css'

function Wrapper(props) {
  const className = `${classes.wrapper} ${props.className}`
  return (
    <div className={className}>{props.children}</div>
  )
}

export default Wrapper