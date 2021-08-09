import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 1,
    title: "first meetup",
    image: "https://picsum.photos/200/300?random=2",
    address: "Some Address"
  },
  {
    id: 2,
    title: "Second meetup",
    image: "https://picsum.photos/200/300?random=1",
    address: "Some Address"
  },
  {
    id: 3,
    title: "Third meetup",
    image: "https://picsum.photos/200/300?random=3",
    address: "Some Address"
  }
];
const HomePage = () => {
  return (
    <div>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </div>
  );
};

export default HomePage;
