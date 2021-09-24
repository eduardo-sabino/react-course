import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useState } from "react";

const MainNavigation = () => {
  const [isChecked, setIsChecked] = useState(false)

  function toggleCheckBox(){
      setIsChecked(!isChecked)
  }

  return (
    <header className={classes.header}>
      <label className={classes.icon} htmlFor="iconId" onClick={toggleCheckBox}>
        <i className="fa fa-bars"></i>
      </label>
      <div className={classes.logo}>
        React <span>Meetups</span>
      </div>
      <nav>
        <input type="checkbox" id="iconId" checked={isChecked} readOnly/>
        <ul>
          <li>
            <Link to="/" onClick={toggleCheckBox}>All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup" onClick={toggleCheckBox}>New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites" onClick={toggleCheckBox}>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
