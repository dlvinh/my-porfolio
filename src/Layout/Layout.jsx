import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'


export default function Layout() {
    const { resume } = useSelector((state) => {
        // console.log(state);
        return state.UserState;
    });
    const path = useLocation();
    console.log("path",path);

    return (
        <section className='main'>
            {/* <Loading></Loading> */}
            <Navbar></Navbar>
            <main className='main-content'>
                <Outlet></Outlet>
            </main>
            <a
                style={{display: path.pathname ==="/Home"? "none" :""}}
                target="_blank"
                rel="noopener noreferrer"
                href={resume}
                className="my-btn btn--float my-4"
            >
            </a>
        </section>

    )
}
