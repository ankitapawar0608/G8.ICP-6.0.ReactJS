import React from 'react'
import './Contact.css'; // Import CSS file for styling
import logo from '../Contact/logo.png'
import Navbar from '../../components/Navbar/Navbar'
import Footer from "./../../components/Footer/Footer"
import {Link} from "react-router-dom"



function Contact() {



  return (
    <>
      <Navbar />

      <div>
        <form className='form-container '>
          <h2 className='heading-text'>Get in touch</h2>
          <hr></hr>

          <div >
          <p className='lable-1 '>Name:</p>
          <input type='text' placeholder='Enter your name' className='input-contact p-2'></input>

          <p className='lable-1'>Email:</p>
          <input type='text' placeholder='Enter your email' className='input-contact p-2'></input>

          <p className='lable-1'>Contact No:</p>
          <input type='text' placeholder='Enter your contact no' className='input-contact p-2'></input>

          <p className='lable-1'>Message:</p>
          <input type='text' placeholder='Enter your message' className='input-2'></input><br></br>

          </div>
<div className='d-flex justify-content-center my-2'>
         <button type='button' className='submit-btn' >
          Submit
         </button>
         </div>
        </form>
      </div>

      <div>
        <form className='form-container-2'>
          <h2>Contact</h2>
          <p className='label-2'>📍 Address: Main branch in pune ,
            maharashtra.
          </p>
          <hr></hr>

          <p className='label-2'>📞 <Link to="tel:+918830779433"> +91-8888888888</Link>
          </p>
          <hr></hr>

          <p className='label-2'>  📩 <Link to="mailto:ankitapawar0608@gmail.com"> cognexlearn@gmail.com</Link></p>


          
                       
          <hr></hr>

          <p className='label-2'><Link to="/">www.cognexlearn.com</Link></p>
          <hr></hr>
          <div className='img-logo'>
            <img src={logo} alt='logo'></img>
          </div>

        </form>
      </div>

      <br/>
      <br/> <br/>
      <br/> <br/>
      <br/>

      <Footer/>

    </>

  )
}


export default Contact