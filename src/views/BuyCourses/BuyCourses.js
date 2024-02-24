import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./BuyCourses.css"
import Footer from '../../components/Footer/Footer'
import imgadd from './button.png';
import CourseAddCard from '../../components/CourseAddCard/CourseAddCard';

import PaymentPage from '../../components/PaymentPage/PaymentPage'
import {CART_DATA} from "./../../components/PaymentPage/configpage"
import { COURSE_DATA } from "./../config"
import MoreCourses from "./../../components/MoreCourses/MoreCourses"
//import AddtoCart from "./../../components/Add to cart/AddtoCart"

function BuyCourses() {

  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState('')
  const [error, setError] = useState('');
  const [category, setCategory] = useState('');


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
      title: newCourse,
      category: category
    }, ...courses]

    saveTaskToLS(newCourses)


    setCourses(newCourses)
    setNewCourse('')

    //   setCourses([newCourse, ...courses])
    //   setNewCourse('')
  }

  const saveTaskToLS = (taskstoSave) => {
    localStorage.setItem('courses', JSON.stringify(taskstoSave))
  }

  const deleteTask = (index) => {
    const newCourses = courses;
    newCourses.splice(index, 1);
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
        <h1 className='text-center m-4'>Shopping Cart</h1>



<div>

   {
    CART_DATA.map((cartdata, index) => {
      const { heading ,instructor,rating,price ,img} = cartdata;

      return <PaymentPage
        heading={heading}
        instructor={instructor}
        rating={rating}
        price={price}
        img={img}


        key={index}/>
    })
    }

</div>
       
        <hr/>
        <h1 className='text-center m-4'>Add to Cart</h1>
        <div className=' d-flex justify-content-center'>
          <input
            type='text'
            placeholder='Add courses to cart'
            className='p-2 my-2 w-25 input-buy'
            value={newCourse}
            onChange={(e) => {
              setNewCourse(e.target.value)
            }} />


          <select
            className='my-2 p-2 mx-3 input-buy'
            value={category}
            onChange={(e) => {
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
                const { title, category } = course;
                return (
                  <CourseAddCard
                    title={title}
                    category={category}
                    course={course}
                    key={i}
                    del={deleteTask}
                    index={i} />
                )
              })
            }

          </div>
        </div>


<hr/>

         <div>
          <h3 className='m-5'> You might also like</h3>
          <div className='d-flex justify-content-center flex-wrap'>
          {
            COURSE_DATA.map((morecourse, index) => {
              const { title, price, description ,rating ,images} = morecourse;

              return <MoreCourses
                title={title}
                description={description}
                rating={rating}
                price={price}
                images={images}


                key={index}/>
            })
            }
            </div>
     
        </div> 






      </div>

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