import React from "react";
import DoneTask from "../Components/DoneTask";
import Carousel from "../Layout/Carousel";
import style from "../Styles/AboutMe.module.css";


export default function AboutMe() {
  
  return (
    <section className={`${style["about-me"]}`}>
      <em>
        <h3>
          About <span style={{ color: "#ffd6a5" }}>Me!</span>
        </h3>
      </em>
      <article className={`${style["about-me-article"]}`}>
        <div className={`${style["introduction"]}`}>
          <ul>
            <li>
              I'm graduated <strong>Master of Information Technology</strong> in{" "}
              <strong>Monash University Australia</strong>
            </li>
            <li>
              My passion is Programming, and Web Developing I'm currently a
              Front-End Developer in React JS.
            </li>
            <li>My dream is to become a professional Fullstack developer</li>
          </ul>
        </div>
        <div className={`${style["personal-info"]}`}>
          <p>
            <span className="highlighted">Working at </span>Warehouse Assisstant
            - Toys R Us Anz Limited
          </p>
          <p>
            <span className="highlighted">Age </span>28
          </p>
          <p>
            <span className="highlighted">Address </span>Australia - Melbourne
          </p>
          <p>
            <span className="highlighted">Email </span>vinhxp95@gmail.com
          </p>
          <p>
            <span className="highlighted">Phone </span>0433986789
          </p>
          <p>
            <span className="highlighted">Languages </span>Vietnamese - English
          </p>
        </div>
      </article>
      <section className="skills mt-5 mb-3">
        <em>
          <h3>Skills</h3>
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
          <h3>What I do</h3>
        </em>
      </section>
      <DoneTask></DoneTask>

      {/* CAROUSEL */}
      <em>
        <h3>Endorsements</h3>
      </em>
      <div>
       <Carousel></Carousel>
      </div>
    </section>
  );
}
