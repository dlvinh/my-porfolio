import React, { Fragment } from "react";

export default function Skills() {
  return (
    <Fragment>
      <div className="skill-container">
        <label>Html/CSS </label>
        <div className="progress html"></div>
      </div>

      <div className="skill-container">
        <label>Javascript</label>
        <div className="progress javascript"></div>
      </div>
      <div className="skill-container">
        <label>ReactJS</label>
        <div className="progress reactjs"></div>
      </div>

      <div className="skill-container">
        <label>NodeJS</label>
        <div className="progress nodejs"></div>
      </div>
    </Fragment>
  );
}
