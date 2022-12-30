import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import FloatBtn from '../Utilities/FloatBtn';


export default function Layout() {
    const { resume } = useSelector((state) => {
        // console.log(state);
        return state.UserState;
    });
    return (
        <section className='main'>
            {/* <Loading></Loading> */}
            <Navbar></Navbar>
            <main className='main-content'>
                <Outlet></Outlet>
            </main>
         <FloatBtn resume={resume}></FloatBtn>
        </section>

    )
}
