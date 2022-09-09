// domain/meetups
import MeetupList from "../../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    title: "first meet up",
    address: "khu pho 15, phuong Tan Binh",
    description: "beautiful",
  },
  {
    id: "m2",
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    title: "second meet up",
    address: "khu pho 16, phuong Thu Duc",
    description: "awesome",
  },
  {
    id: "m3",
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    title: "third meet up",
    address: "khu pho 15, phuong Hiep Dinh",
    description: "fantastic",
  },
];

const MeetUps = (props) => {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
};

export default MeetUps;
