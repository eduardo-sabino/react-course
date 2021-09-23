import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  
  function dataHandler(data) {
    const meetups = [];
    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };
      meetups.push(meetup);
    }

    return meetups;
  }
  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-course-6115f-default-rtdb.firebaseio.com/meetup.json")
      .then((response) => response.json())
      .then((data) => {
        const meetups = dataHandler(data);
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList items={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;
