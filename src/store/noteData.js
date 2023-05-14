import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  notes: [],
  search: "",
  username: "",
};

const slice = createSlice({
  name: "note Slice",
  initialState,
  reducers: {
    addingExistingNotes(state, action) {
      const info = action.payload;
      const notes = info.notes;
      console.log(notes);
      state.notes = notes;
      state.username = info.username;
    },
    addNote(state, action) {
      const date = new Date();
      const dateData = date.toUTCString().split(" ");
      const day = dateData[1];
      const month = dateData[2];
      const year = dateData[3];
      const dateObj = {
        day,
        month,
        year,
      };
      const data = action.payload;
      const notes = [
        ...state.notes,
        {
          ...data,
          dateObj,
          id: Math.floor(Math.random() * 1000) * Math.random(),
        },
      ];
      const info = { username: state.username, notes };
      localStorage.setItem("onThoughtNotes", JSON.stringify(info));
      state.notes = notes;
      console.log(state.notes);
    },
    removeNote(state, action) {
      const id = action.payload;
      const deleteInd = state.notes.findIndex((item) => {
        return item.id === id;
      });
      const notes = state.notes;
      notes.splice(deleteInd, 1);
      const info = { username: state.username, notes };

      localStorage.setItem("onThoughtNotes", JSON.stringify(info));

      state.notes.splice(deleteInd, 1);
    },
    editNote(state, action) {
      const date = new Date();
      const dateData = date.toUTCString().split(" ");
      const day = dateData[1];
      const month = dateData[2];
      const year = dateData[3];
      const dateObj = {
        day,
        month,
        year,
      };
      const data = action.payload;
      const id = data.id;
      const editInd = state.notes.findIndex((item) => {
        return item.id === id;
      });
      const newObj = {
        ...data,
        dateObj,
      };
      const notes = state.notes;
      notes[editInd] = newObj;

      const info = { username: state.username, notes };

      localStorage.setItem("onThoughtNotes", JSON.stringify(info));

      state.notes[editInd] = newObj;
    },
    searchNote(state, action) {
      const searchString = action.payload;
      state.search = searchString;
    },
    addUsername(state, action) {
      const username = action.payload;
      state.username = username;
      const info = { username: state.username, notes: state.notes };

      localStorage.setItem("onThoughtNotes", JSON.stringify(info));
    },
  },
});

export const action = slice.actions;
const noteReducer = slice.reducer;

export default noteReducer;
