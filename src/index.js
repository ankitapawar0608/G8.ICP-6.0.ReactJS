import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from "./views/Home/Home"
import AboutUS from "./views/AboutUs/AboutUs"
import Contact from "./views/Contact/Contact"
import Login from "./views/Login/Login"
import AllCourses from "./views/AllCourses/AllCourses"
import BuyCourses from "./views/BuyCourses/BuyCourses";
import SignUp from "./views/SignUp/SignUp";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <AboutUS/>
  },
  {
    path: "/contact",
    element: <Contact />
  },
  // {
  //   //path parameter
  //   path: "/blog/:id" ,
  //   element : <Read/>
  // },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/allcourses",
    element: <AllCourses/>
  },
  {
    path: "/buycourses",
    element: <BuyCourses />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
]
)

root.render(<RouterProvider router={router}/>)


