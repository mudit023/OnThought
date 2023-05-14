import { action } from "./noteData";
import { action as visibilityAction } from "./newNoteVisible";
const actionCreator = () => {
  return (dispatch) => {
    const info = localStorage.getItem("onThoughtNotes");
    console.log(info);
    if (!info) {
      dispatch(action.addingExistingNotes({ username: "", notes: [] }));
      dispatch(visibilityAction.showProfile());
    } else {
      dispatch(action.addingExistingNotes(JSON.parse(info)));
    }
  };
};
export default actionCreator;
