import React from 'react'
import "./AllCourses.css"
import { info } from '../../components/AllCourcesContent/content'
import ALLCources from '../../components/AllCourcesCard/ALLCourcesCard'
import Navbar from '../../components/Navbar/Navbar'

   
function AllCourses() {
  return (
    <>
    <Navbar/>
    <div>
      
      <div className='card-container my-5'> 
      {
        info.map((info,index)=>{
        
          return(<ALLCources key={index} info={info} />)
        })
      }
      </div>
    </div>
    </>

  )
}

export default AllCourses