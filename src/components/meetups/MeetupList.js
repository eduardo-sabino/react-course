import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const itemHandler = (item) => {
  const { id, image, title, address, description } = item;

  return (
    <MeetupItem
      key={id}
      id={id}
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
};

const MeetupList = (props) => {
  const { items } = props;

  return <ul className={classes.list}>{items.map(itemHandler)}</ul>;
};

export default MeetupList;
