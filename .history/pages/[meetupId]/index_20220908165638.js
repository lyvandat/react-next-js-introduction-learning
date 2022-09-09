import { MongoClient, ObjectId } from "mongodb";

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
      id={props.meetupItem.id}
      title={props.meetupItem.title}
      image={props.meetupItem.image}
      address={props.meetupItem.address}
      description={props.meetupItem.description}
    ></MeetupDetail>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://lyvandat:0909927212aA@cluster0.lsg2quf.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // first {}: filter criteria. ex: {title: "first meet up"} (tim thang co title la first meet up)
  // second {}: thuoc tinh lay ra
  const meetupIdList = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false, // all needed pages are covered (different url will be 404 - not found)
    paths: meetupIdList.map((id) => {
      return {
        params: {
          meetupId: id.toString(),
        },
      };
    }),
    // paths: [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m3",
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  // get meetup id.
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  // getting single meetup from mongo db.
  const client = await MongoClient.connect(
    "mongodb+srv://lyvandat:0909927212aA@cluster0.lsg2quf.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetupItem = meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  return {
    props: {
      meetupItem: {
        id: meetupItem._id.toString(),
        title: meetupItem.title,
        address: meetupItem.address,
        image: meetupItem.image,
        description: meetupItem.description,
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
