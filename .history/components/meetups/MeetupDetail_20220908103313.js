import React from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <React.Fragment>
      <img src={props.image} alt={props.title}></img>
      <h2>{props.title}</h2>
      <h3>{props.address}</h3>
      <p>{props.description}</p>
    </React.Fragment>
  );
};

export default MeetupDetail;
