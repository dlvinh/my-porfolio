import React, { useEffect } from "react";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Knowledge from "../Components/Knowledge";
import Skills from "../Components/Skills";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { initialFirebaseApp } from "../Services/FirebaseService";
export default function Resume() {
  return (

    <motion.div 
      className="container mt-3"
      initial={{
        y:300,
        opacity:0,
        scale: [0.2],
      }}
      animate={{
        y:0, 
        opacity:1,
        transition: {duration: 1.5},
        scale: 1
      }}
      exit={{opacity: 0,
        y:300,
        scale: 0.5,
        }}
    >
      
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
    </motion.div>
  );
}
