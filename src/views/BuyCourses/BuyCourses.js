import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./BuyCourses.css"
import Footer from '../../components/Footer/Footer'
import imgadd from './button.png'

function BuyCourses() {
  return (
    <div>
      <Navbar />

      <div className=' background'>
        <h1 className='text-center'> Buy Courses</h1>
        <div className=' d-flex justify-content-center'>
          <input
            type='text' 
            placeholder='Add courses to cart'
            className='p-2 my-2 w-25 input' />

          <img src={imgadd}
            height={40}
            alt='add'
            className='mx-3 my-2 add-btn'
          // onClick={}
          />


        </div>




      </div>

<Footer/>

    </div>
  )
}

export default BuyCourses