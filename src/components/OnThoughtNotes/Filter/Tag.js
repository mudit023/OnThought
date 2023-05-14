import React from 'react'
import classes from './Tag.module.css'
function Tag(props) {
  return (
    <div className={classes.container}>{props.name}</div>
  )
}

export default Tag