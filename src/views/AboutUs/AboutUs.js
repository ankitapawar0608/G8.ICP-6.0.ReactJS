
import React from 'react';
import './AboutUs.css'; // Import CSS file for styling
import shweta from '../AboutUs/shweta.png';
import anika from '../AboutUs/anika.png';
import vansh from '../AboutUs/vansh.png';
import Navbar from '../../components/Navbar/Navbar'

  function AboutUs() {
    return (
      <>
        <Navbar />
        <div>
          <h1 style={{ paddingLeft: '550px' }}>AboutUs</h1>
          <div className="about-container" style={{ widows: "1000px" }}>
            {/* Big container with blue border shadow */}
            <div className="big-container">
              {/* Three different sections */}
              <div className="section">
                {/* First block */}
                <div className="block">
                  <img src={anika} alt='ankita'></img>
                  <div className="info">
                    <h2>Ankita Pawar</h2>
                    <p>Teaching Assistant</p>
                    <a href="mailto:your.email@gmail.com" className="button">Gmail</a>
                    <a href="https://www.linkedin.com/in/yourprofile" className="button">LinkedIn</a>
                  </div>
                </div>
                <hr className="line" />
                {/* Second block */}
                <div className="block">
                  <img src={shweta} alt='shweta'></img>
                  <div className="info">
                    <h2>Shweta Vasekar</h2>
                    <p>Instructor</p>
                    <a href="mailto:your.email@gmail.com" className="button">Gmail</a>
                    <a href="https://www.linkedin.com/in/yourprofile" className="button">LinkedIn</a>
                  </div>
                </div>
                <hr className="line" />
                {/* Third block */}
                <div className="block">
                  <img src={vansh} alt='vansh'></img>
                  <div className="info">
                    <h2>Vansh Bharne</h2>
                    <p>Teaching Assistant</p>
                    <a href="mailto:your.email@gmail.com" className="button"> Gmail</a>
                    <a href="https://www.linkedin.com/in/yourprofile" className="button">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* Line between each block */}
              <hr className="line" />
              <hr className="line" />
            </div>
          </div>
        </div>
      </>
    )
  }


  export default AboutUs;
