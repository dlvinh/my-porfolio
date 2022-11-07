import React from "react";
import { Link } from "react-router-dom";
import DoneTask from "../Components/DoneTask";
import Carousel from "../Layout/Carousel";
import style from "../Styles/AboutMe.module.css";
import Contact from "./Contact";

export default function AboutMe() {
  return (
    <section className={`${style["about-me"]}`}>
      <em>
        <h3 className="title">
          About <span className="title__secondary">Me!</span>
        </h3>
      </em>
      <article className={`${style["about-me-article"]}`}>
        <div className={`${style["introduction"]}`}>
          <ul>
            <li>
              I'm graduated{" "}
              <em className="emphasis">Master of Information Technology</em> in{" "}
              Monash University Australia
            </li>
            <li>
              My passion is{" "}
              <em className="emphasis">Programming, and Web Developing</em> I'm
              currently a Front-End Developer in React JS
            </li>
            <li>
              My dream is to become a professional{" "}
              <em className="emphasis">Software Engineer</em> and{" "}
              <em className="emphasis">Fullstack developer</em>
            </li>
          </ul>
        </div>
        <div className={`${style["personal-info"]}`}>
          <ul>
            <li>
              <span className="highlighted">Working at </span>Warehouse
              Assisstant - Toys R Us Anz Limited
            </li>
            <li>
              <span className="highlighted">Age </span>28
            </li>
            <li>
              <span className="highlighted">Address </span>Australia - Melbourne
            </li>
            <li>
              <span className="highlighted">Email </span><Link to="/Contact">vinhxp95@gmail.com</Link>
            </li>
            <li>
              <span className="highlighted">Phone </span>0433986789
            </li>
            <li>
              <span className="highlighted">Languages </span>Vietnamese -
              English
            </li>
          </ul>
        </div>
      </article>
      <section className="skills mt-5 mb-3">
        <em >
          <h3 className="title">Skills</h3>
        </em>
        <div
          className={`${style["skills-container"]} d-flex mt-4 justify-content-around`}
        >
          <img
            className={`${style["skill-logo"]}`}
            alt="bootstrap"
            src="./assets/logos/icons8-bootstrap.svg"
          ></img>
          <img
            className={`${style["skill-logo"]}`}
            alt="bootstrap"
            src="./assets/logos/icons8-css3.svg"
          ></img>
          <img
            className={`${style["skill-logo"]}`}
            alt="bootstrap"
            src="./assets/logos/icons8-figma.svg"
          ></img>
          <img
            className={`${style["skill-logo"]}`}
            alt="bootstrap"
            src="./assets/logos/icons8-html-5.svg"
          ></img>
          <img
            className={`${style["skill-logo"]}`}
            alt="bootstrap"
            src="./assets/logos/icons8-javascript.svg"
          ></img>
          <img
            className={`${style["skill-logo"]}`}
            alt="bootstrap"
            src="./assets/logos/icons8-react.svg"
          ></img>
          <img
            className={`${style["skill-logo"]}`}
            alt="bootstrap"
            src="./assets/logos/icons8-redux.svg"
          ></img>
        </div>
      </section>
      <section className="done-task mt-5">
        <em>
          <h3 className="title">What <span className="title__secondary">I do</span></h3>
        </em>
      </section>
      <DoneTask></DoneTask>

      {/* CAROUSEL */}
      <em>
        <h3 className="title">Endorsements</h3>
      </em>
      <div>
        <Carousel></Carousel>
      </div>
    </section>
  );
}
