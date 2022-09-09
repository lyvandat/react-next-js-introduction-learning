import { useRouter } from "next/router";
import MeetupItem from "../../components/meetups/MeetupItem";

const MeetupDetail = (props) => {
  const route = useRouter();
  console.log(route.query.meetupId);
  return (
    <MeetupItem
      title="first meetup"
      image="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      address="123 street binh long"
    ></MeetupItem>
  );
};

export default MeetupDetail;
