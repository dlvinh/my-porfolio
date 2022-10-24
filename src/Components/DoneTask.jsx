import React, { Fragment } from "react";
import TaskItem from "./TaskItem";
import style from "../Styles/TaskItem.module.css"

export default function DoneTask() {
  return (
    <Fragment>
      <section className="whatdone d-flex flex-wrap justify-content-between mt-5">
        {/* <TaskItem></TaskItem>
            <TaskItem></TaskItem>
            <TaskItem></TaskItem>
            <TaskItem></TaskItem> */}
        <div className={`${style["task-item"]} text-left mb-5`}>
          <i className={`${style["icon"]} fa fa-laptop-code`}> </i>
          <h4 className="my-4 highlighted">Web Development</h4>
          <p>
              Be able to create web application from different frameworks. Strong knowledge in HTML/CSS/Javascript.<br></br>
              Good at ReactJs and NodeJS.
          </p>
        </div>

        <div className={`${style["task-item"]} text-left mb-5`}>
          <i className={`${style["icon"]} fa fa-code`}> </i>
          <h4 className="my-4 highlighted">Programing</h4>
          <p>
             Having knowledge in Object Orient Program such as Java, Flutter.
             <br></br> 
              Perform clean code
          </p>
        </div>
        <div className={`${style["task-item"]} text-left mb-5`}>
          <i className={`${style["icon"]} fa fa-pen-nib`}> </i>
          <h4 className="my-4 highlighted">Design Thinking</h4>
          <p>
             Having knowledge in Object Orient Program such as Java, Flutter.<br></br>
             Perform clean code
          </p>
        </div>
      </section>
    </Fragment>
  );
}
