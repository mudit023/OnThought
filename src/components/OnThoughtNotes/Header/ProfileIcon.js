import React from 'react'
import classes from './ProfileIcon.module.css'
import { CgProfile } from "react-icons/cg";

function ProfileIcon() {
  return (
    <div className={classes.profile_icon}>
      <CgProfile/>
    </div>
  )
}

export default ProfileIcon