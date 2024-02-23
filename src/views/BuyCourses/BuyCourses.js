import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./BuyCourses.css"
import Footer from '../../components/Footer/Footer'
import imgadd from './button.png';
import CourseAddCard from '../../components/CourseAddCard/CourseAddCard';

//import PaymentPage from '../../components/PaymentPage/PaymentPage'

//import AddtoCart from "./../../components/Add to cart/AddtoCart"

function BuyCourses() {

  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState('')
  const [error, setError] = useState('');
  const [category , setCategory] = useState('');


  const addCourse = () => {

    if (newCourse === '') {
      setError('Please add a course!!');
      return
    }
    else {
      setError("")
    }

    // const newCourses=[newCourse, ...courses]
    // saveTaskToLS(newCourses)

    
    const newCourses = [{
     title : newCourse,
     category : category
    } , ...courses]

  saveTaskToLS(newCourses)


  setCourses(newCourses)
    setNewCourse('')

  //   setCourses([newCourse, ...courses])
  //   setNewCourse('')
  }

  const saveTaskToLS = (taskstoSave)=>{
    localStorage.setItem('courses',JSON.stringify(taskstoSave))
  }

  const deleteTask = (index) => {
    const newCourses = courses;
    newCourses.splice(index,1);
    setCourses([...newCourses])

   saveTaskToLS(newCourses)
  }



  useEffect(() => {
    if (courses.length === 0) {
      return
    }

   saveTaskToLS(courses)
  }, [courses])

 

  return (
    <div>
      <Navbar />

      <div className=' background'>

        <h1 className='text-center m-4'> Buy Courses</h1>


        <div className=' d-flex justify-content-center'>
          <input
            type='text'
            placeholder='Add courses to cart'
            className='p-2 my-2 w-25 input'
            value={newCourse}
            onChange={(e) => {
              setNewCourse(e.target.value)
            }} />


          <select 
          className='my-2 p-2 mx-3 input'
          value={category}
          onChange={(e)=>{
             setCategory(e.target.value)
          }}>
            <option>Select</option>
            <option value='Programming 💻'>Programming 💻</option>
            <option value='Web Dev💻'>  Web Dev</option>
            <option value='DSA 💻'>DSA 💻</option>
          </select>


          <img src={imgadd}
            height={40}
            alt='add'
            className=' my-2 add-btn'
            onClick={addCourse}
          />




        </div>
        <p className='text-center text-danger'>{error}</p>

        <div className=''>
          <div className='course-container d-flex flex-column align-items-center '>
            {
              courses.map((course, i) => {
                const {title,category}= course;
                return(
                 <CourseAddCard 
                 title={title}
                 category = {category}
                 course={course} 
                 key={i} 
              del={deleteTask} 
              index={i}/>
                )
              })
            }

          </div></div>


      </div>
     
<br/>
<br/>
<br/>
{/* <br/>
<PaymentPage/> */}
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
      <Footer />

    </div>
  )
}

export default BuyCourses