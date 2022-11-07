import { getDownloadURL, ref } from 'firebase/storage';
import React, { Fragment, useEffect, useState } from 'react'

export default function SideHeader({storage,app}) {
    const [urlState,setUrlState]=  useState("");
    useEffect(() => {
        console.log("run useEffect")
        const getURl = async()=>{
            try{
                const url = await getDownloadURL(ref(storage, 'Resume-DucVinhLe.pdf'));
                console.log(url);
                setUrlState(url)
             
            }catch(error){
                console.log(error);
            }
        }
        getURl();
    }, [])
    
    return (
        <Fragment>
        <section className="side-header">
            <div className='side-header-container'>
            <img className="avatar mb-5" alt="..." src='https://images.unsplash.com/photo-1665427803235-8e295131ad29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
            <div className="header-content">
                <h2>Duc Vinh Le</h2>
                <h3>Web Developer</h3>
                <section className="social-media my-4">
                           <a href="https://linkedin.com/in/duc-vinh-le-76ba091aa" target="_blank" rel="noopener noreferrer" > <i className="icon fab fa-linkedin-in"></i></a>
                            <a href="http://m.me/ducvinh.le.39"  target="_blank" rel="noopener noreferrer" ><i className="icon fab fa-facebook-f"></i></a>
                            <a href='https://www.instagram.com/leevinh_195' target="_blank" rel="noopener noreferrer" ><i className="icon fab fa-instagram"></i></a> 
                        </section>
            </div>
            <a target="_blank" rel="noopener noreferrer" href={urlState} className='btn btn-download'>
                Download My CV
            </a>
            </div>
           
        </section>
       </Fragment>
    )
}
