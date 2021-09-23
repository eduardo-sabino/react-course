import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

const NewMeetupForm = () => {
  return (
    <div>
      <Card>
        <form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" required id="title" />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image</label>
            <input type="url" required id="image" />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type="text" required id="address" />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea required id="description" rows='5' ></textarea>
          </div>
          <div className={classes.actions}>
              <button>Add</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewMeetupForm;
