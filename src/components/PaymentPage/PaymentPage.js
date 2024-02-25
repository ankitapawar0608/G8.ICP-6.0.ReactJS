
import React from 'react';
import './PaymentPage.css';

function PaymentPage({ heading, instructor, rating, price, img, del }) {
  return (
    <>
      <div className="shopping-cart m-5 ">


        <div className='d-flex justify-content-between flex-wrap'>
          <div className="course-details">
            <img
              src={img}
              alt="Course"
              className="course-thumbnail"
            />
            <div className="course-info d-flex">
              <div>
                <h3 className='m-3'>{heading}</h3>


                <p>
                  <strong>Instructor:</strong> {instructor}
                </p>
                <p>
                  <strong>Rating:</strong> {rating}
                </p>

                <p><strong>Current price:</strong> {price}</p>
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
              <button className="apply-coupon">Buy Now</button>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default PaymentPage;
