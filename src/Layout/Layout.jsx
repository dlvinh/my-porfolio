import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Loading from '../Utilities/Loading'


export default function Layout() {
    return (
        <section className='main'>
            {/* <Loading></Loading> */}
            <Navbar></Navbar>
            <main className='main-content'>
                <Outlet></Outlet>
            </main>
        </section>

    )
}
