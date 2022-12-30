import React, { Fragment, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { motion } from "framer-motion";
export default function Contact() {
  const [state, handleSubmit,resetFunction ] = useForm("xnqroeoq");

  const [show, setShow] = useState(true);
  if (state.succeeded){
    return <section className='container contact-container'>
    <div className="form-success">
      <h1>Thank you for contacting me</h1>
      <h3>I'll be right back</h3>
    </div>
    </section> 
  }
  return (

    <motion.section 
      className='container contact-container mt-3'
      initial={{
        y:300,
        opacity:0,
        scale: [0.2],
      }}
      animate={{
        y:0, 
        opacity:1,
        transition: {duration: 1.5},
        scale: 1
      }}
      exit={{opacity: 0,
        y:300,
        scale: 0.5,
      }}
      >
      <em><h3 className='mb-5 title title--large underline'>Contact <span className='title title--large text--highlighted'>Me!</span></h3></em>

      <div className='contact-right'>
        <form className='d-flex flex-column' onSubmit={handleSubmit}>
          <label for="name">Name</label>
          <input type="text" id='name' name='name' placeholder='Please enter your name' required></input>
          <label for='email'>Email</label>
          <input type="email" id="email" name="email" placeholder="Please enter your email" required></input>
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          <label for="subject">Subject</label>
          <input type="text" id='subject' name='subject' placeholder="Please enter your subject" required></input>
          <label for='message'>Mesage</label>
          <textarea type='text' id="message" name='message' placeholder='Please leave your messages here' required></textarea>
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          <button type='submit' disabled={state.submitting} className='my-btn btn--normal btn--submit mt-3 m-auto btn--small'>{state.submitting? <><Spinner animation="border"  variant="info" size="md" /><p className='text-info'>Sending...</p></> : "Send Message"}</button>
        </form>
      </div>
    </motion.section>

  )
}
