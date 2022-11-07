import React from "react";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Knowledge from "../Components/Knowledge";
import Skills from "../Components/Skills";

export default function Resume() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <em><h4 className="mb-3 title title__secondary">Education</h4></em>
          <Education></Education>
        </div>
        <div className="col">
          <div className="technical-skill-container">
            <h4 className="mb-3 title">Technical <span className="title__secondary">Skills</span></h4>
            <Skills></Skills>
          </div>
          <div className="soft-skills">
           <em><h3 className="mb-3">Knowledge</h3></em> 
            <Knowledge></Knowledge>
          </div>
        </div>
      </div>
      <div className="row">
     <em> <h3 className="title">Experience & <span className="title__secondary">Project</span></h3></em>
        <Experience></Experience>
      </div>
    </div>
  );
}
