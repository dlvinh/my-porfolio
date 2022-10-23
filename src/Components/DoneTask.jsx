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
        <div className={`${style["task-item"]} text-center`}>
          <i className={`${style["icon"]} fa fa-warehouse`}> </i>
          <h3 className="my-4 highlighted">Warehouse Assisstant</h3>
          <p>
            Working with advance <a className="highlighted" href="#">AMR system</a> to help warehouse in
            controlling stock level. Robot operation such as fixing robot
            congestion, rebooting robot, and reporting problems.
          </p>
        </div>

        <div className={`${style["task-item"]} text-center`}>
          <i className={`${style["icon"]} fa fa-users`}> </i>
          <h3 className="my-4 highlighted">Complete Monash Expo</h3>
          <p>
            It's a team-based industry experience studio project developing an IT system for a business client. I was there to help my team create a Web application that encourage teenager in protecting their skin from the affect of Ultra Violet. Show case what we've done to our client and others groups.
          </p>
        </div>
      </section>
    </Fragment>
  );
}
