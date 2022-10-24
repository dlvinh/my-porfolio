import React from 'react'

export default function Contact() {
  return (
    <section className='container contact-container'>
      <h4 className='mb-5'>Contact Me</h4>
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
        <h3>Send me message</h3>
        <form className='d-flex flex-column'>
          <label for="name">Name</label>
          <input type="text" id='name' name='name' placeholder='Name'></input>
          <label for='email'>Email</label>
          <input type="email" id="email" name="email" placeholder="Email"></input>
          <label for="subject">Subject</label>
          <input type="text" id='subject' name='subject' placeholder="Subject"></input>
          <label for='message'>Mesage</label>
          <textarea type='text' id="message" name='message' placeholder='Leave your message'></textarea>
          <button type='submit' className='btn mt-3'>Send Message</button>
        </form>
      </div>
      </div>
    </section>
  )
}
