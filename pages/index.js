import React from "react";
import Head from "next/head";
const HomePage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title> Meetups Welcome </title>
        <meta name="description" content="select your destination!!!"></meta>
      </Head>
      <h2> welcome to home page</h2>
    </React.Fragment>
  );
};

export default HomePage;
