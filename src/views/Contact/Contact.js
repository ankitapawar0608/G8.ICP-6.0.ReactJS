import React from 'react'
import './Contact.css'; // Import CSS file for styling
import logo from '../Contact/logo.png'
import Navbar from '../../components/Navbar/Navbar'


function Contact() {
  return (
    <>
      <Navbar />

      <div>
        <form className='form-container'>
          <h2 className='heading-text'>Get in touch</h2>
          <hr></hr>
          <p className='lable-1'>Name:</p>
          <input type='text' placeholder='enter your name' className='input'></input>

          <p className='lable-1'>Email:</p>
          <input type='text' placeholder='enter your email' className='input'></input>

          <p className='lable-1'>Contact No:</p>
          <input type='text' placeholder='enter your contact no' className='input'></input>

          <p className='lable-1'>Message:</p>
          <input type='text' placeholder='enter your message' className='input-2'></input><br></br>
          <button className='submit-btn' onclick="alert('Your Message Send Successfully')">Submit</button>
        </form>
      </div>

      <div>
        <form className='form-container-2'>
          <h2>Contact</h2>
          <p className='label-2'>📍 Address: Main branch in pune ,
            maharashtra.
          </p>
          <hr></hr>

          <p className='label-2'>📞 Moblie:3786563487
          </p>
          <hr></hr>

          <p className='label-2'>💬 Gmail:xyz879@gmail.com </p>
          <hr></hr>

          <p className='label-2'>www.cognexlearn.com</p>
          <hr></hr>
          <div className='img-logo'>
            <img src={logo} alt='logo'></img>
          </div>

        </form>
      </div>

    </>

  )
}

export default Contact