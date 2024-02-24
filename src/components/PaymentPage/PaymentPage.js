
import React from 'react';
import './PaymentPage.css';
import webdev from "./download.jpg"

function PaymentPage() {
  return (
    <>
      <div className="shopping-cart w-100">
  

        <div className='d-flex justify-content-between'>
          <div className="course-details">
            <img
              src={webdev}
              alt="Course Thumbnail"
              className="course-thumbnail"
            />
            <div className="course-info d-flex">
              <div>
              <h3 className='m-3'>Web Development Masterclass - Online Certification Course</h3>


              <p>
                <strong>Instructor:</strong> YouAccel Training
              </p>
              <p>
                <strong>Rating:</strong> ⭐⭐⭐⭐
              </p>
             
              <p><strong>Current price:</strong> ₹3,099</p>
              </div>
            </div>
          </div>


          <div>
            <div className="total-price">
              <p><strong>Total:</strong> ₹3,099</p>
            </div>
            <div className="promotions">
              <p>Promotions</p>
             
              <input type="text" placeholder="Enter Coupon" className='p-1 rounded m-1' />
              <button className="apply-coupon">Apply coupon</button>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default PaymentPage;
