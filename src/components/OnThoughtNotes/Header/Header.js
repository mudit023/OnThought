import React from "react";
import classes from "./Header.module.css";
import ProfileIcon from "./ProfileIcon";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../store/newNoteVisible";
function Header() {
  const username = useSelector((state) => state.noteReducer.username);
  const dispatch = useDispatch();
  const profileHandler = () => {
    dispatch(action.showProfile());
  };
  const time = new Date();

  const hours = time.getHours();
  let greetings = "Good Morning";
  if (hours >= 16) {
    greetings = "Good Evening";
  } else if (hours >= 12 && hours < 16) {
    greetings = "Good Afternoon";
  }

  return (
    <>
      <div className={classes.intro}>
        <div>
          {username.length > 0 ? (
            <h1>
              Hi{" "}
              <span className="text-[#fde047] text-[4rem] font-bold">
                {username},
              </span>
            </h1>
          ) : (
            <h1>
              {" "}
              Hi{" "}
              <span className="text-[#fde047] text-[4rem] font-bold">
                Guest,
              </span>{" "}
            </h1>
          )}
          <h1>{greetings}</h1>
        </div>
        <div onClick={profileHandler}>
          <ProfileIcon />
        </div>
      </div>
      <div className={classes.search}>
        <SearchBar />
      </div>
    </>
  );
}

export default Header;
