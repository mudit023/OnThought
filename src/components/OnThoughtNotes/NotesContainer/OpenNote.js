import React, { useRef } from "react";
import classes from "./OpenNote.module.css";
import Modal from "../../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../store/noteData";

function OpenNote(props) {
  const oldNoteData = useSelector(state=>state.noteReducer.notes);
  let data = {};
  const dispatch = useDispatch();
  const titleRef = useRef();
  const desRef = useRef();

    for(let i=0; i<oldNoteData.length; i++){
      if(oldNoteData[i].id===props.id){
          data={...oldNoteData[i]};
      }
    }

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const body = desRef.current.value;
    dispatch(action.editNote({title, body, id:props.id}));

    // console.log(title);
    // console.log(description);
    props.closeOldNote();
    titleRef.current.value = "";
    desRef.current.value = "";
  };

  const cancelBtnHandler = () => {
    props.closeOldNote();
  }

  const deleteNoteHandler = () => {
    dispatch(action.removeNote(props.id))
    props.closeOldNote();
  }
  return (
    <Modal onClose={props.closeOldNote}>
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
              defaultValue={data.title}
            />
          </div>
          <div className={classes.description}>
            <textarea
              style={{ resize: "none" }}
              id="des"
              ref={desRef}
              rows={6}
              placeholder="Write your thought..."
              defaultValue={data.body}
            />
          </div>
          <div className={classes.btn}>
            <button type="button" onClick={cancelBtnHandler}>Cancel</button>
            <button type="submit">Edit</button>
            <button type="button" onClick={deleteNoteHandler}>Delete</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default OpenNote;
