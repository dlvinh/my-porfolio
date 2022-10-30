import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SideHeader from "../Components/SideHeader";

export default function SideContent({storage,app}) {
  return (
    <Fragment>
      <SideHeader firebaseApp={app} storage={storage}></SideHeader>
      <section className="content-area">
        <section className="content">
          <Outlet></Outlet>
        </section>
      </section>
    </Fragment>
  );
}
