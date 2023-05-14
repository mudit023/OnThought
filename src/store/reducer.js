import { configureStore } from "@reduxjs/toolkit";
import noteVisibilityReducer from "./newNoteVisible";
import noteReducer from "./noteData";

const store = configureStore({
  reducer: { noteReducer: noteReducer, noteVisibility: noteVisibilityReducer },
});

export default store;
