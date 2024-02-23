import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./BuyCourses.css"
import Footer from '../../components/Footer/Footer'
import imgadd from './button.png';
import CourseAddCard from '../../components/CourseAddCard/CourseAddCard';

//import AddtoCart from "./../../components/Add to cart/AddtoCart"

function BuyCourses() {

  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState('')
  const [error, setError] = useState('');


  const addCourse = () => {

    if (newCourse === '') {
      setError('Please add a course!!');
      return
    }
    else {
      setError("")
    }


    setCourses([newCourse, ...courses])
    setNewCourse('')
  }



  const deleteTask = (index) => {
    const newCourses = courses;
    newCourses.splice(index,1);
    setCourses([...newCourses])
  }



  useEffect(() => {
    if (courses.length === 0) {
      return
    }

    localStorage.setItem('courses', JSON.stringify(courses))
  }, [courses])

  useEffect(() => {
     const courses = localStorage.getItem('courses');
     if (courses) {
       setCourses(JSON.parse(courses));
    }
   }, [])


  return (
    <div>
      <Navbar />

      <div className=' background'>
        <h1 className='text-center'> Buy Courses</h1>
        <div className=' d-flex justify-content-center'>
          <input
            type='text'
            placeholder='Add courses to cart'
            className='p-2 my-2 w-25 input'
            value={newCourse}
            onChange={(e) => {
              setNewCourse(e.target.value)
            }} />

          <img src={imgadd}
            height={40}
            alt='add'
            className='mx-3 my-2 add-btn'
            onClick={addCourse}
          />




        </div>
        <p className='text-center text-danger'>{error}</p>

        <div className=''>
          <div className='course-container d-flex flex-column align-items-center '>
            {
              courses.map((course, i) => {
                return(
                 <CourseAddCard 
                 course={course} 
                 key={i} 
              del={deleteTask} 
              index={i}/>
                )
              })
            }

          </div></div>


      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />

    </div>
  )
}

export default BuyCourses