import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  function addMeetupHandler(item) {
    fetch(
      "https://react-course-6115f-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>Add Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
