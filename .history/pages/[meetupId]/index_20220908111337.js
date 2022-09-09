import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  const route = useRouter();
  const itemId = route.query.meetupId;
  console.log(itemId);

  // fetching data using id
  // ...
  return (
    <MeetupDetail
      id={itemId}
      title="first meetup"
      image="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      address="123 street binh long"
      description="very long long text..."
    ></MeetupDetail>
  );
};

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupItem: {
        id: meetupId,
        title: "first meetup",
        image:
          "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        address: "123 street binh long",
        description: "very long long text...",
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
