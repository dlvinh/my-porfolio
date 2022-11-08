import React, { Fragment ,useEffect, useState} from 'react'
import style from '../Styles/HomePageStyle.module.css';
import { ref,getDownloadURL } from "firebase/storage";
import { motion } from 'framer-motion';

export default function Home({storage,app}) {
  
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
    }, []);

    
   
    return (
            <motion.section 
                className={style["home-container"]}
                initial={{
                    opacity:0,
                  }}
                  animate={{
                    opacity:1,
                    transition: {duration: 1}
                  }}
                  exit={{
                    opacity: 0,
                  }}
            >
                <img className={style['avatar']} alt="..." src='https://images.unsplash.com/photo-1665427803235-8e295131ad29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
                <div className={`{style["header-content"]}`}>
                    <h2 className='my-4'>Duc Vinh Le</h2>
                    <h4 className='my-4 font-weight-light'>Web Developer</h4>
                    <section className={style['content']}>
                        <section className="social-media">
                           <a href="https://linkedin.com/in/duc-vinh-le-76ba091aa" target="_blank" rel="noopener noreferrer" > <i className="icon fab fa-linkedin-in"></i></a>
                            <a href="http://m.me/ducvinh.le.39"  target="_blank" rel="noopener noreferrer" ><i className="icon fab fa-facebook-f"></i></a>
                            <a href='https://www.instagram.com/leevinh_195' target="_blank" rel="noopener noreferrer" ><i className="icon fab fa-instagram"></i></a> 
                        </section>
                    </section>
                </div>
                <a target="_blank" rel="noopener noreferrer" href={urlState} className={`btn ${style["btn-download"]} my-4`}>
                    Download My CV
                </a>
            </motion.section>
    )
}
