import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = (props) => {
  const router = useRouter();
  const addMeetupHandler = async (meetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data.message);

    router.push("/meetups");
  };

  return (
    <React.Fragment>
      <Head>
        <title> Stunning Meetups </title>
        <meta
          name="description"
          content="stunning views to see in the world"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </React.Fragment>
  );
};

export default NewMeetUp;
