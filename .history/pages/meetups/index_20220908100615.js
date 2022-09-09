// domain/meetups
import MeetupList from "../../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meet up",
    address: "khu pho 15, phuong Tan Binh",
    description: "beautiful",
  },
  {
    id: "m2",
    title: "second meet up",
    address: "khu pho 16, phuong Thu Duc",
    description: "awesome",
  },
  {
    id: "m3",
    title: "third meet up",
    address: "khu pho 15, phuong Hiep Dinh",
    description: "fantastic",
  },
];

const MeetUps = (props) => {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
};

export default MeetUps;
