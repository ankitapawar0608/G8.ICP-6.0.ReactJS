import React from 'react'
import "./CourseAddCard.css"
import imgbin from "./waste-bin.png"

function CourseAddCard({ course, del, index }) {
    return (
        <>
            <div className='course-card shadow d-flex justify-content-between align-items-center'>
                <h4 className='fs-5 '>{course}</h4>

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