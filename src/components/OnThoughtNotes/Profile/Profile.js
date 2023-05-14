import React, { useRef } from "react";
import classes from "./Profile.module.css";
import Modal from "../../UI/Modal";
import { useDispatch } from "react-redux";
import { action } from "../../../store/newNoteVisible";
import { action as notesAction } from "../../../store/noteData";
const Profile = () => {
  const usernameRef = useRef("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(notesAction.addUsername(`${usernameRef.current.value}`));
    dispatch(action.hideProfile());
    console.log("submitted");
  };
  const hideProfileHandler = () => {
    dispatch(action.hideProfile());
  };
  return (
    <Modal onClose={hideProfileHandler}>
      <div className={classes.container}>
        <form className={classes.noteForm} onSubmit={submitHandler}>
          <div className={classes.username}>
            <input
              type="text"
              id="username"
              ref={usernameRef}
              placeholder="Enter username"
              maxLength={50}
              required={true}
              defaultValue={""}
            />
          </div>

          <div className={classes.btn}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Profile;
