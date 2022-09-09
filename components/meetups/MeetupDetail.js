import React from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <div className={classes.detail}>
      <div className={classes["img-wrapper"]}>
        <img src={props.image} alt={props.title}></img>
      </div>
      <h2>{props.title}</h2>
      <h3>{props.address}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default MeetupDetail;
