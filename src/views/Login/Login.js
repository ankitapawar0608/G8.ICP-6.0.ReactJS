import React from 'react'
import Loginform from '../../components/login/loginform'
import Navbar from '../../components/Navbar/Navbar'
import  Footer  from "../../components/Footer/Footer.js"

function Login() {
  return (
    <><Navbar />
    <div className='page'>
      <Loginform />
    </div>
    <Footer/>
    </>
  )
}

export default Login