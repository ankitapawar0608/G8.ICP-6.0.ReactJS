import React from 'react'
import "./AllCOurcesCard.css"
import {Link} from "react-router-dom" 

function ALLCources(props) {
  const{title,description,img,price,rating}=props.info;
  return (
    <div className="card text-center my-3 mx-5   "  style={{width:" 25rem"}}>
    <img src={img} className="rounded float-start"alt="..." id='img-edit' style={{width:"180px"}}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text m-0">{description.slice(0,100)}</p>
    </div>
    <p>{rating}</p>
    <div className='' style={{display:'flex',justifyContent:'space-evenly'}}>
     
      <h3>₹{price}/-</h3>
    </div>
    <Link to='/buycourses'>
      <button type="button" className="btn my-2"   id='butcor'  >Add to Cart</button>
      </Link>
  </div>
  )
}

export default ALLCources