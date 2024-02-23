import React from 'react'
import Loginform from '../../components/login/loginform'
import Navbar from '../../components/Navbar/Navbar'

function Login() {
  return (
    <><Navbar />
    <div className='page'>
      <Loginform />
    </div></>
  )
}

export default Login