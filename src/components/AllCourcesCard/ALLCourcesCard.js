import React from 'react'
import "./AllCOurcesCard.css"

function ALLCources(props) {
  const{title,description,img,price}=props.info
  return (
    <div className="card text-center my-3 mx-5   "  style={{width:" 18rem;  "}}>
    <img src={img} className="rounded float-start"alt="..." id='img-edit' style={{width:"180px"}}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <h3>{price} </h3>
      <button type="button" class="btn btn-primary btn-sm " style={{backgroundColor:" #6674CC"}}>buy</button>
      
    </div>
  </div>
  )
}

export default ALLCources