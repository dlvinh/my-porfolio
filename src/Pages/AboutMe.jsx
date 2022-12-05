import React from "react";
import { Link } from "react-router-dom";
import DoneTask from "../Components/DoneTask";
import Carousel from "../Layout/Carousel";
import style from "../Styles/AboutMe.module.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfo } from "../Services/FirebaseService";

export default function AboutMe() {
  const { userInfo,endorsementList } = useSelector((state) => {
    console.log(state.UserState.endorsementList)
    return state.UserState;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async()=>{
      await dispatch(getUserInfo());
    }
   getData();
  }, []);
  return (
    <motion.section
      className="about-me"
      initial={{
        y: 300,
        opacity: 0,
        scale: [0.2],
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
        scale: 1,
      }}
      exit={{ opacity: 0, y: 300, scale: 0.2 }}
    >
      <em>
        <h3 className="title title--large underline">
          About <span className="text--highlighted">Me !</span>
        </h3>
      </em>
      <article className="about-me-article">
        <div className="introduction">
          <ul>
            <li>
              <em className="emphasis">Nearly One year</em> in developing <em className="emphasis">FrontEnd</em> with <em className="emphasis">React JS</em>
            </li>
            <li>
              Strong experience in 
              <em className="emphasis"> HTML-CSS-Javascript</em>
            </li>
            <li>
              My passion is{" "}
              <em className="emphasis">Programming, and Web Developing</em>
            </li>
            <li>
              My dream is to become a professional{" "}
              <em className="emphasis">Software Engineer</em> and{" "}
              <em className="emphasis">Fullstack developer</em>
            </li>
            <li>
              I'm graduated{" "}
              <em className="emphasis">Master of Information Technology</em> in{" "}
              Monash University Australia
            </li>
            <li>
              Currently working in warehouse and by night developing an application using  <em className="emphasis">Flutter</em>  with a small team
            </li>
           
           
          </ul>
        </div>
        <div className="personal__info">
          <ul>
            <li>
              <span className="text--highlighted ">Working at </span>
              {userInfo.currentJob}
            </li>
            <li>
              <span className="text--highlighted">Age </span>
              {userInfo.userAge}
            </li>
            <li>
              <span className="text--highlighted">Address </span>
              {userInfo.userAddress}
            </li>
            <li>
              <span className="text--highlighted">Email </span>
              <Link className="hyperlink" to="/Contact">
                {userInfo.userEmail}
              </Link>
            </li>
            <li>
              <span className="text--highlighted">Phone </span>
              {userInfo.userPhone}
            </li>
            <li>
              <span className="text--highlighted">Languages </span>
              {userInfo.userLanguages?.map((language, index) => {
                return language + " ";
              })}
            </li>
          </ul>
        </div>
      </article>
      <section className="skills mt-5 mb-3">
        <em>
          <h3 className="text--highlighted title underline title--large">
            Skills
          </h3>
        </em>
        <div className={"skills-container d-flex mt-4 justify-content-around"}>
          <img
            className="skill-logo"
            alt="bootstrap"
            src={process.env.PUBLIC_URL+"/assets/logos/icons8-bootstrap.svg"}
          ></img>
          <img
            className="skill-logo"
            alt="bootstrap"
            // src=".my-porfolio/assets/logos/icons8-css3.svg"
              src={process.env.PUBLIC_URL+"/assets/logos/icons8-css3.svg"}
          ></img>
          <img
            className="skill-logo"
            alt="bootstrap"
            src={process.env.PUBLIC_URL+"/assets/logos/icons8-figma.svg"}
          ></img>
          <img
            className="skill-logo"
            alt="bootstrap"
            src={process.env.PUBLIC_URL+"/assets/logos/icons8-html-5.svg"}
          ></img>
          <img
            className="skill-logo"
            alt="bootstrap"
          src={process.env.PUBLIC_URL+"/assets/logos/icons8-javascript.svg"}
          ></img>
          <img
            className="skill-logo"
            alt="bootstrap"
            src={process.env.PUBLIC_URL+"/assets/logos/icons8-react.svg"}
          ></img>
          <img
            className="skill-logo"
            alt="bootstrap"
            src={process.env.PUBLIC_URL+"/assets/logos/icons8-redux.svg"}
          ></img>
        </div>
      </section>
      <section className="done-task mt-5">
        <em>
          <h3 className="title underline text--highlighted title--large">
            What <span className="title__secondary">I do</span>
          </h3>
        </em>
      </section>
      <DoneTask></DoneTask>

      {/* CAROUSEL */}
      <em>
        <h3 className="title title--large underline text--highlighted">
          Endorsements
        </h3>
      </em>
      <Carousel endorsementList={endorsementList} ></Carousel>
    </motion.section>
  );
}
