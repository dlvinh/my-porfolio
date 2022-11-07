import React, { Fragment, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'
export default function Contact() {
  const [state, handleSubmit,resetFunction ] = useForm("xnqroeoq");

  const [show, setShow] = useState(true);
  if (state.succeeded){
    return <section className='container contact-container'>
        <ToastContainer position='top-center'>
      <Toast
          className="d-inline-block m-5"
          bg="success"
          onClose={()=>{
            setShow(false);
          }} show={show} delay={3000}
          animation="true"
        
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className={'text-white'}>
            Hello, world! This is a toast message.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    <div className="form-success">
      <h1>Thank you for contacting me</h1>
      <h3>I'll be right back</h3>
    </div>
    </section> 
  }
  return (
    <Fragment>
    
      
    <section className='container contact-container mt-3'>
      <em><h3 className='mb-5 title'>Contact <span className='title__secondary'>Me!</span></h3></em>
      <div className='row'>
      <div className="contact-left col-4 d-flex flex-column justify-content-center align-items-center">
        <div className='flip-card'>
          <div className='flip-card-inner'>
          <div className='card-front'>
          <h4>Address</h4>
          </div>
           <div className='card-back'>
            <p>Melbourne Australia</p>
           </div>
          </div>
        </div>
        <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='card-front'>
          <h4>Phone</h4>
          </div>
           <div className='card-back'>
            <p>+61 433906789</p>
           </div>
          </div>
        </div>
        <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='card-front'>
          <h4>Email</h4>
          </div>
           <div className='card-back'>
            <p>vinhxp95@gmai.com</p>
           </div>
          </div>
        </div>
      </div>
      <div className='contact-right col-8'>
        <form className='d-flex flex-column' onSubmit={handleSubmit}>
          <label for="name">Name</label>
          <input type="text" id='name' name='name' placeholder='Name' required></input>
          <label for='email'>Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required></input>
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          <label for="subject">Subject</label>
          <input type="text" id='subject' name='subject' placeholder="Subject" required></input>
          <label for='message'>Mesage</label>
          <textarea type='text' id="message" name='message' placeholder='Leave your message' required></textarea>
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          <button type='submit' disabled={state.submitting} className='btn mt-3'>{state.submitting? <><Spinner animation="border"  variant="info" size="md" /><p className='text-info'>Sending...</p></> : "Send Message"}</button>
        </form>
      </div>
      </div>
    </section>
    </Fragment>

  )
}
