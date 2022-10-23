import React from "react";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";

export default function Resume() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Education></Education>
        </div>
        <div className="col">
          <div className="technical-skill-container">
            <h3>Technical Skills</h3>
            <Skills></Skills>
          </div>
        </div>
      </div>
      <div className="row">
        <Experience></Experience>
      </div>
    </div>
  );
}
