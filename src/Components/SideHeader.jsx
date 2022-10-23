import React, { Fragment } from 'react'

export default function SideHeader() {
    return (
        <Fragment>
        <section className="side-header">
            <img className="avatar" alt="..." src='https://images.unsplash.com/photo-1665427803235-8e295131ad29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
            <div className="header-content">
                <h2>Duc Vinh Le</h2>
                <h3>Web Developer</h3>
                <section className="social-media">
                    <i class="icon fab fa-linkedin-in"></i>
                    <i class="icon fab fa-facebook-f"></i>
                    <i class="icon fab fa-instagram"></i>
                </section>
            </div>
            <button className='btn btn-download'>
                Download My CV
            </button>
        </section>
       </Fragment>
    )
}
