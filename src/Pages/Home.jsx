import React, { useEffect } from "react";
import { } from "firebase/storage";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { initialFirebaseApp } from "../Services/FirebaseService";
import { } from "firebase/app";
import NormalBtn from "../Utilities/NormalBtn";

export default function Home() {
    const { storage, app } = useSelector((state) => {
        // console.log(state.FireStoreState);
        return state.FireStoreState;
    });
    const { image, resume } = useSelector((state) => {
        // console.log(state);
        return state.UserState;
    });
    const dispatch = useDispatch();
    useEffect(() => {
        if (!storage) {
            dispatch(initialFirebaseApp());
        }
    }, [storage]);

    return (
        <motion.section
            className="home__container"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: { duration: 1 },
            }}
            exit={{
                opacity: 0,
            }}
        >
            <img
                className="avatar large--avatar small--avatar"
                alt="This is my avatar"
                src={image}
            />
            <div className="home__middle">
                <h1 className="my-4 title partial--border">Duc Vinh Le</h1>
                <h4 className="my-4 font-weight-light subtitle">
                    <span>
                    Software Engineer 
                    </span>
                    <span>
                    | 
                    </span>
                    <span>
                    Web Developer 
                    </span>
                    <span>
                    | 
                    </span>
                    <span>
                    Freelancer 
                    </span>
                </h4>

                <section className="social-media">
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
            <NormalBtn resume={resume}></NormalBtn>

            <a
                target="_blank"
                rel="noopener noreferrer"
                href={resume}
                className="my-btn btn--float my-4"
            >
            </a>
        </motion.section>
    );
}
