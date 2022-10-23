import React from "react";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Knowledge from "../Components/Knowledge";
import Skills from "../Components/Skills";

export default function Resume() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4 className="mb-3 title">Education</h4>
          <Education></Education>
        </div>
        <div className="col">
          <div className="technical-skill-container">
            <h4 className="mb-3 title">Technical Skills</h4>
            <Skills></Skills>
          </div>
          <div className="soft-skills">
            <h3 className="mb-3">Knowledge</h3>
            <Knowledge></Knowledge>
          </div>
        </div>
      </div>
      <div className="row">
      <h4 className="title">Experience & Project</h4>
        <Experience></Experience>
      </div>
    </div>
  );
}
