import React from 'react'
import"./loginform.css"

const Loginform = () => {
   
  return (
    <div className='cover background'>
    <h1 >Login</h1>
    <input type="text" placeholder='Enter your Username' className='input-login my-2 p-2 mx-3 w-75'/>
    <input type="password" placeholder='Enter your Password' className='input-login my-2 p-2 mx-3 w-75' />


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