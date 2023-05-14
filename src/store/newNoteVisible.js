import { createSlice } from "@reduxjs/toolkit";

const noteVisibility = createSlice({
  name: "new note status",
  initialState: { newNoteStatus: false, profile: false },
  reducers: {
    toggleNote(state) {
      state.newNoteStatus = !state.newNoteStatus;
    },
    closeNote(state) {
      state.newNoteStatus = false;
    },
    showProfile(state, action) {
      state.profile = true;
    },
    hideProfile(state, action) {
      console.log("fired");
      state.profile = false;
    },
  },
});

export const action = noteVisibility.actions;
const noteVisibilityReducer = noteVisibility.reducer;
export default noteVisibilityReducer;
