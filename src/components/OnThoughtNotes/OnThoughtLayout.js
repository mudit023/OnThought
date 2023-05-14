import React, { useReducer, useEffect } from "react";
// import store from "../../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import FilterNavigation from "./Filter/FilterNavigation";
import classes from "./OnThoughtLayout.module.css";
import Header from "./Header/Header";
import Notes from "./NotesContainer/Notes";
import FooterNav from "./Footer/FooterNav";
import NoteForm from "./NewNote/NoteForm";
import { action } from "../../store/newNoteVisible";
import OpenNote from "./NotesContainer/OpenNote";
import actionCreator from "../../store/noteLoader";
import Profile from "./Profile/Profile";

const reducerFun = (state, action) => {
  if (action.type === "open") {
    return {
      visibilityStatus: true,
      id: action.id,
    };
  } else if (action.type === "close") {
    return {
      visibilityStatus: false,
      id: null,
    };
  }
};
const initialState = {
  visibilityStatus: false,
  id: null,
};

function OnThoughtLayout() {
  const [state, dispatchAction] = useReducer(reducerFun, initialState);
  const showNote = useSelector((state) => state.noteVisibility.newNoteStatus);
  const showProfile = useSelector((state) => state.noteVisibility.profile);
  const dispatch = useDispatch();

  const closeNoteHandler = () => {
    dispatch(action.closeNote());
  };
  const toggleNoteHandler = () => {
    dispatch(action.toggleNote());
  };

  const openOldNoteHandler = (id) => {
    console.log(id);
    dispatchAction({ type: "open", id });
  };
  const closeOldNoteHandler = () => {
    dispatchAction({ type: "close" });
  };

  useEffect(() => {
    dispatch(actionCreator());
  }, [actionCreator]);
  return (
    <>
      <div className={classes.container}>
        <Header />
        {false && <FilterNavigation />}
        <Notes openOldNoteHandler={openOldNoteHandler} />
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="fixed bottom-0 left-[50%] -translate-x-1/2"
        >
          <FooterNav toggleNote={toggleNoteHandler} />
        </div>
      </div>
      {showNote && <NoteForm closeNote={closeNoteHandler} />}
      {state.visibilityStatus && (
        <OpenNote id={state.id} closeOldNote={closeOldNoteHandler} />
      )}
      {showProfile && <Profile></Profile>}
    </>
  );
}

export default OnThoughtLayout;
