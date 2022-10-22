import React, { Fragment } from 'react'
import style from '../Styles/HomePageStyle.module.css';

export default function Home() {
    return (
        <Fragment>
            <section className={style["home-container"]}>
                <img className={style['avatar']} alt="..." src='https://images.unsplash.com/photo-1665427803235-8e295131ad29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
                <div className={`{style["header-content"]}`}>
                    <h2 className='my-4'>Duc Vinh Le</h2>
                    <h3 className='my-4'>Web Developer</h3>
                    <section className={style['content']}>
                        <section className="social-media">
                            <i class="icon fab fa-linkedin-in"></i>
                            <i class="icon fab fa-facebook-f"></i>
                            <i class="icon fab fa-instagram"></i>
                        </section>
                    </section>
                </div>
                <button className={`btn ${style["btn-download"]} my-4`}>
                    Download My CV
                </button>
            </section>
        </Fragment>
    )
}
