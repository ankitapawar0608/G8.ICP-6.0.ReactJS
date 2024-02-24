import React from 'react'
import "./MoreCourses.css"



function MoreCourses({ title, price, description, rating, images }) {
    return (
        <div className='width rounded m-2'>
            

            <div className='m-3 '>

                <img src={images} className='head-img' alt='Img'></img>

                <strong>{title}</strong>
                <p>{rating}</p>
                <strong>{price}</strong>
                <p>{description}</p>

            </div>
            

        </div>
    )
}

export default MoreCourses