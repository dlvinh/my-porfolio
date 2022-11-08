import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SideHeader from "../Components/SideHeader";
import { motion } from "framer-motion";
export default function SideContent({storage,app}) {
  return (
    <Fragment>
      <SideHeader firebaseApp={app} storage={storage}></SideHeader>
      <motion.section 
        className="content-area"
        initial={{
          opacity:0
         
        }}
        animate={{
          opacity:1
        }}
        exit={{
          opacity:0
        }}
      >
          <Outlet></Outlet>
      </motion.section>
    </Fragment>
  );
}
