import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { motion, usePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  getAvatarAndResumeUrl,
  initialFirebaseApp,
} from "../Services/FirebaseService";
export default function SideHeader() {
  const { image, resume } = useSelector((state) => {
    console.log(state.UserState);
    return state.UserState;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!image || !resume) {
      dispatch(initialFirebaseApp());
    }
  }, [image, resume]);

  return (
    <motion.section
      className="side-header"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { ease: "backInOut", duration: 1.2 },
      }}
      exit={{ opacity: 0 }}
    >
      <img className="avatar mb-5" alt="..." src={image} />
      <div className="header-content">
        <h2 className="title">Duc Vinh Le</h2>
        <h3 className="subtitle">
          Software Engineer | Web Developer | Freelancer
        </h3>
        <section className="social-media my-4">
          <a
            className="hyperlink"
            href="https://linkedin.com/in/duc-vinh-le-76ba091aa"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <i className="icon fab fa-linkedin-in"></i>
          </a>
          <a
            className="hyperlink"
            href="http://m.me/ducvinh.le.39"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon fab fa-facebook-f"></i>
          </a>
          <a
            className="hyperlink"
            href="https://www.instagram.com/leevinh_195"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon fab fa-instagram"></i>
          </a>
        </section>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={resume}
        className="my-btn btn-download my-4"
      >
        My RESUME
      </a>
    </motion.section>
  );
}
