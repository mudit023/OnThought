import React from "react";
import Note from "./Note";
import classes from "./Notes.module.css";
import { useSelector } from "react-redux";

// const DUMMYDATA = [
//   {
//     title: "Test Note 1",
//     body: "This is the test note 1",
//     id: 'n1'
//   },
//   {
//     title: "Test Note 2",
//     body: "This is the test note 2",
//     id: 'n2'
//   },
//   {
//     title: "Test Note 3",
//     body: "This is the test note 3",
//     id: 'n3'
//   },
//   {
//     title: "Test Note 4",
//     body: "This is the test note 4",
//     id: 'n4'
//   },
//   {
//     title: "Test Note 5",
//     body: "This is the test note 5",
//     id: 'n5'
//   },
//   {
//     title: "Test Note 6",
//     body: "This is the test note 6",
//     id: 'n6'
//   },
// ];

function Notes(props) {
  let notes = useSelector((state) => state.noteReducer.notes);
  const search = useSelector((state) => state.noteReducer.search);

  if (search.length > 0) {
    notes = notes.filter((note) => {
      return note.title.includes(search);
    });
  }
  return (
    <div className={classes.container}>
      {notes.length === 0 && (
        <p className="text-[3rem] text-slate-50">Please add notes</p>
      )}
      {notes.map((item) => (
        <Note
          title={item.title}
          body={item.body}
          key={item.id}
          id={item.id}
          dateObj={item.dateObj}
          openOldNoteHandler={props.openOldNoteHandler}
        />
      ))}
    </div>
  );
}

export default Notes;
