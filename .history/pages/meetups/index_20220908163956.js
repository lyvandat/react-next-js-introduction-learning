// domain/meetups
import { MongoClient } from "mongodb"; // this will be installed in server(not in client side)
import { useEffect, useState } from "react";
import MeetupList from "../../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "first meet up",
    address: "khu pho 15, phuong Tan Binh",
    description: "beautiful",
  },
  {
    id: "m2",
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "second meet up",
    address: "khu pho 16, phuong Thu Duc",
    description: "awesome",
  },
  {
    id: "m3",
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "third meet up",
    address: "khu pho 15, phuong Hiep Dinh",
    description: "fantastic",
  },
];

const MeetUps = (props) => {
  return <MeetupList meetups={props.meetups}></MeetupList>;
};

export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://lyvandat:0909927212aA@cluster0.lsg2quf.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
        };
      }),
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default MeetUps;
