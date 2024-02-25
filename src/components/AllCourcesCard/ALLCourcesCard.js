import React from 'react'
import "./AllCOurcesCard.css"
import { Link } from "react-router-dom"

function ALLCources(props) {
  const { title, description, img, price,  } = props.info;  
  // rating
  return (
    <div className="card my-3 mx-5 shadow" style={{ width: " 22rem" }}>
      <img src={img} className="rounded float-start w-100" alt="..." id='img-edit' />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text m-0">{description.slice(0, 100)}</p>
      </div>
      {/* <p>{rating}</p> */}

      <h3 className='text-center'>₹{price}/-</h3>
      <div className='d-flex justify-content-evenly' >

      <Link to='/buycourses' className="">
        <button type="button" className="btn my-2" id='butcor'  >Add to Cart</button>
      </Link>
      <Link to='/buycourses' className="">
        <button type="button" className="btn my-2" id='butcor'  >View Course</button>
      </Link>
       
      </div>


     
    </div>
  )
}

export default ALLCources