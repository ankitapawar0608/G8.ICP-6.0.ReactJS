import React from 'react'
import "./AllCourses.css"
import { info } from '../../components/AllCourcesContent/content'
import ALLCources from '../../components/AllCourcesCard/ALLCourcesCard'
import Navbar from '../../components/Navbar/Navbar'
import  Footer  from "../../components/Footer/Footer.js"

   
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
    <Footer/>
    </>

  )
}

export default AllCourses