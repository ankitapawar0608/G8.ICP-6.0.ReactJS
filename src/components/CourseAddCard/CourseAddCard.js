import React from 'react'
import "./CourseAddCard.css"
import imgbin from "./waste-bin.png"

function CourseAddCard({ title , category ,course, del, index }) {
    return (
        <>
            <div className='course-card shadow d-flex justify-content-between align-items-center'>
                <h4 className='fs-5 '>{title}</h4>
                <span className='category-div'>{category}</span>
                <img src={imgbin} alt='bin'
                    onClick={() => {
                        del(index)
                    }}
                    className='bg-light rounded-circle p-1 cursor-pointer'
                    style={{ cursor: "pointer" }}
                    height={30} />
            </div>

        </>
    )

}

export default CourseAddCard