import React, { Fragment } from "react";
import DoneTask from "../Components/DoneTask";
import style from "../Styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={`${style["about-me"]}`}>
         <em><h1>About <span style={{color: "#ffd6a5"}}>Me!</span></h1></em> 
      <article
        className={`${style["about-me-article"]}`}>
        <div className={`${style["introduction"]}`}>
          <ul>
            <li>
              I'm graduated <strong>Master of Information Technology</strong> in <strong>Monash University Australia</strong>
            </li>
            <li>
              My passion is Programming, and Web Developing I'm currently a
              Front-End Developer in React JS.
            </li>
            <li>My dream is to become a professional Fullstack developer</li>
          </ul>
        </div>
        <div className={`${style["personal-info"]}`}>
          <p>Current job: Warehouse Assisstant - Toys R Us Anz Limited</p>
          <p>Age: 28</p>
          <p>Address: Australia - Melbourne</p>
          <p>Email: vinhxp95@gmail.com</p>
          <p>Phone: 0433986789</p>
          <p>Languages: Vietnamese - English</p>
        </div>
      </article>
      <section className="skills mt-5 mb-3">
        <em><h1>Skills</h1></em>
        <div className="skills-container d-flex mt-4 justify-content-around">
          <img className={`${style['skill-logo']}`} alt="bootstrap" src='./assets/logos/icons8-bootstrap.svg'></img>
          <img className={`${style['skill-logo']}`} alt="bootstrap" src='./assets/logos/icons8-css3.svg'></img>
          <img className={`${style['skill-logo']}`} alt="bootstrap" src='./assets/logos/icons8-figma.svg'></img>
          <img className={`${style['skill-logo']}`} alt="bootstrap" src='./assets/logos/icons8-html-5.svg'></img>
          <img className={`${style['skill-logo']}`} alt="bootstrap" src='./assets/logos/icons8-javascript.svg'></img>
          <img className={`${style['skill-logo']}`} alt="bootstrap" src='./assets/logos/icons8-react.svg'></img>
          <img className={`${style['skill-logo']}`} alt="bootstrap" src='./assets/logos/icons8-redux.svg'></img>
        </div>
      </section>
      <section className="done-task mt-5">
        <em><h1>What I've done</h1></em>
      </section>
      <DoneTask></DoneTask>
     
    </section>
  );
}
