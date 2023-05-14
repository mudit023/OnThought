import React from 'react'
import Tag from './Tag';
import classes from './Tags.module.css';

const DUMMYDATA = [{name: 'All Notes', id:'t1'},{name: 'TODO', id:'t2'},{name: 'Dev', id:'t3'}];

function Tags(props) {
  return (
    <div className={classes.container}>
      {DUMMYDATA.map(item=>{
        return(
          <Tag name={item.name} key={item.id}/>
        )
      })}
    </div>
  )
}

export default Tags