import React from 'react'
import classes from './Note.module.css';

function Note(props) {
  const clickHandler = () => {
    props.openOldNoteHandler(props.id);
    console.log("click Handler");
  }
  return (
    <div className={classes.container} onClick={clickHandler}>
      <div className={classes.title}>
        <h2 className={classes['note-title']}>{props.title}</h2>
      </div>
      <div className={classes.body}>
        <p className={classes['note-body']}>{props.body}</p>
      </div>
      <div className={classes['note-info']}>
        <p className={classes.date}>{`${props.dateObj.day} ${props.dateObj.month} ${props.dateObj.year}`}</p>
        <p className={classes.tag}>Tag</p>
      </div>
    </div>
  )
}

export default Note