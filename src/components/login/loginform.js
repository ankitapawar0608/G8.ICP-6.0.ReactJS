import React from 'react'
import"./loginform.css"

const Loginform = () => {
   
  return (
    <div className='cover'>
    <h1 >Login</h1>
    <input type="text" placeholder='username' />
    <input type="password" placeholder='password' />


      <div className='login-btn' >LOGIN</div>
      <p className='text'> OR LOGIN USING</p>

      <div className='alt-login'>
        <div className='facebook'></div>
        <div className='google'></div>
      </div>

    

    </div>
  )
}

export default Loginform