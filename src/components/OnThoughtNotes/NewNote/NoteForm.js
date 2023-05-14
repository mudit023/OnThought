import React, { useRef } from "react";
import classes from "./NoteForm.module.css";
import Modal from "../../UI/Modal";
import { useDispatch } from "react-redux";
import { action } from "../../../store/noteData";

function NoteForm(props) {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const desRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const body = desRef.current.value;
    dispatch(action.addNote({title, body}));

    // console.log(title);
    // console.log(description);
    props.closeNote();
    titleRef.current.value = "";
    desRef.current.value = "";
  };

  const cancelBtnHandler = () => {
    props.closeNote();
  }
  return (
    <Modal onClose={props.closeNote}>
      <div className={classes.container}>
        <form className={classes.noteForm} onSubmit={submitHandler}>
          <div className={classes.title}>
            <input
              type="text"
              id="title"
              ref={titleRef}
              placeholder="Title"
              maxLength={50}
              required={true}
            />
          </div>
          <div className={classes.description}>
            <textarea
              style={{ resize: "none" }}
              id="des"
              ref={desRef}
              rows={6}
              placeholder="Write your thought..."
            />
          </div>
          <div className={classes.btn}>
            <button type="button" onClick={cancelBtnHandler}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default NoteForm;
