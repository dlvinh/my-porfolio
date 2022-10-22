import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import SideHeader from '../Components/SideHeader'
import SideContent from './SideContent'

export default function Layout() {
    return (
        <section className='main'>
            <Navbar></Navbar>
            <main className='main-content'>
                <Outlet></Outlet>
            </main>
        </section>

    )
}
