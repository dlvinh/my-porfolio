import React, { Fragment } from "react";

export default function Experience() {
  return (
    <Fragment>
        <h3 className="title">Experience & Project</h3>
        <div className="experience-container d-flex justify-content-around" >
      
      <card className="card my-card-style">
        <div className="card-body d-flex flex-column justify-content-between">
          <h4 className="card-title title">Movie Booking Ticket</h4>
          <p className="card-text card-height">
            Movie Booking Ticket Application is a web application where movies
            are displayed aestheically and allows users to have a reservations
            for that movie. Their will be an Admin authorisation to create new
            movie and to manage user account.
          </p>
          <button className="btn">Try Demo</button>
        </div>
      </card>
      <card className="card my-card-style">
        <div className="card-body d-flex flex-column justify-content-between">
          <h4 className="card-title title">Spotify - Mini Project</h4>
          <p className="card-text card-height">
            It's a simple project to practise React Toolkit and Material Design
            in advance. Moreover, it's using Spotify API to provide
            authentication service for application. User can see their music
            library on the website
          </p>
      <button className="btn">Try Demo</button>
        </div>
      </card>
  
      <card className="card my-card-style">
        <div className="card-body d-flex flex-column justify-content-between">
        <h4 className="card-title title" >To Do App</h4>
        <p className="card-text card-height">
          By using React TypeScript to build the application, it's a practise in
          order to understand TypeScript. Furthermore, Firebase realtime
          database is also implemented to store tasks.
        </p>
      <button className="btn">Try Demo</button>
        </div>
  
      </card>
    </div>
    </Fragment>
   
  );
}
