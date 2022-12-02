import React, { Fragment } from "react";

export default function Experience() {
  return (
    <Fragment>
      <div className="experience-container  d-flex justify-content-between">
        <card className="card my-card-style card-container">
          <div className="card-front card-body d-flex flex-column justify-content-center align-items-center">
            <h4 className="card-title title text-center">
              Movie Booking Ticket
            </h4>
          </div>
          <div className="card-back card-body d-flex flex-column justify-content-between align-items-center">
            <p className="card-text card-height  my-4 text-justify">
              Movie Booking Ticket Application is a web application where movies
              are displayed aestheically and allows users to have a reservations
              for that movie. Their will be an Admin authorisation to create new
              movie and to manage user account.
            </p>
            <button className="my-btn card-btn">Try Demo</button>
          </div>
        </card>

        <card className="card my-card-style card-container">
          <div className="card-front card-body d-flex flex-column justify-content-center align-items-center">
            <h4 className="card-title title text-center">
              Spotify - Mini Project
            </h4>
          </div>
          <div className=" card-back card-body d-flex flex-column justify-content-between align-items-center">
            <p className="card-text card-height  my-4 text-justify">
              It's a simple project to practise React Toolkit and Material
              Design in advance. Moreover, it's using Spotify API to provide
              authentication service for application. User can see their music
              library on the website
            </p>
            <button className="my-btn card-btn">Try Demo</button>
          </div>
        </card>

        <card className="card my-card-style card-container">
          <div className="card-front card-body d-flex flex-column justify-content-center align-items-center">
            <h4 className="card-title title text-center">To Do App</h4>
          </div>

          <div className="card-back card-body d-flex flex-column justify-content-between align-items-center">
            <p className="card-text card-height my-4 text-justify">
              By using React TypeScript to build the application, it's a
              practise in order to understand TypeScript. Furthermore, Firebase
              realtime database is also implemented to store tasks.
            </p>
            <button className="my-btn card-btn">Try Demo</button>
          </div>
        </card>
      </div>
    </Fragment>
  );
}