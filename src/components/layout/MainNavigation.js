import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <label className={classes.icon} htmlFor="iconId">
        <i className="fa fa-bars"></i>
      </label>
      <div className={classes.logo}>
        React <span>Meetups</span>
      </div>
      <nav>
        <input type="checkbox" id="iconId" />
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
