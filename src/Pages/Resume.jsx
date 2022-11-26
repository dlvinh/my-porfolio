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
          <em><h4 className="mb-3 title  text--highlighted underline">Education</h4></em>
          <Education></Education>
        </div>
        <div className="col">
          <div className="technical-skill-container">
            <em>
            <h3 className="mb-3 title text--highlighted underline">Technical <span className="text--highlighted">Skills</span></h3>
            </em>
           
            <Skills></Skills>
          </div>
          <div className="soft-skills mt-5">
           <em><h3 className="mb-3 title text--highlighted underline">Knowledge</h3></em> 
            <Knowledge></Knowledge>
          </div>
        </div>
      </div>
      <div className="row">
     <em> <h3 className="title text--highlighted underline">Experience & <span className="title__secondary">Project</span></h3></em>
        <Experience></Experience>
      </div>
    </motion.div>
  );
}
