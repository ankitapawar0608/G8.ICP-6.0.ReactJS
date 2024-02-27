import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router';

//import { COURSE_DATA } from '../../views/config';
import {info } from "./../AllCourcesContent/content"

function ViewMore(heading , img) {
const {id} = useParams()

const [courseDetails , setCourseDetails] = useState({})

 useEffect(()=>{

 info.forEach((obj)=>{
  if (obj.id == id){
    setCourseDetails(obj)
  }

 })
 },[id])


  return (
   <>
   <Navbar/>

   {/* <h1>{courseDetails.heading}</h1> */}

   <div className='m-5 p-3'>
    <div className='d-flex justify-content-evenly'>

      <div>
      <img src={courseDetails.img} alt='img' className='w-200' style={{width: "400px"}}/>
      </div>

      <div className='p-3'>
        <h2 className='fw-bold'>{courseDetails.title}</h2>

        <p className='p-2 fs-5'>{courseDetails.detail}</p>
      </div>
      
    </div>
   </div>
   
   
   </>
  )
}

export default ViewMore