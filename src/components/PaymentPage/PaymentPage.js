import React from 'react';
import './PaymentPage.css'; // Import your CSS file

function PaymentPage() {
  return (
    <div className="payment-container">
      <div className="merchant-info">
        <h2>APNA COLLEGE</h2>
        <p>Merchant-logo</p>
      </div>
      <div className="payment-details">
        <h3>Payment Details</h3>
        <div className="amount">
          <p>Amount</p>
          <p>₹ 8,999.00</p>
          <p>18% GST included which is paid to the Government.</p>
        </div>
        <div className="customer-info">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Full Name" />
        </div>
        <button className="pay-button">Pay ₹ 8,999.00</button>
      </div>
      <div className="course-info">
        <h3>Sigma 2.0 | Web Development & DSA</h3>
        <p>Sigma Feb'24 Batch | Web Development + Data Structures & Algorithms</p>
        <p>Get Placement Ready with Shradha Ma'am!</p>
        <p>Course access will be 2 years.</p>
        <p>With this course, you will get:</p>
        <ul>
          <li>Complete Frontend Development (HTML, CSS, Javascript & frameworks like Bootstrap & Tailwind)</li>
          <li>Complete Backend Development (Node.js, Express.js)</li>
          <li>Complete Database - SQL & MongoDB</li>
          <li>Complete MERN Stack (MongoDB, Express, React, Node)</li>
          <li>Real Life and Industry Grade Projects</li>
        </ul>
        <button className="show-more-button">Show More</button>
      </div>
      <div className="contact-info">
        <p>Contact Us:</p>
        <p>sigma@apnacollege.in</p>
        <p>9999999999</p>
        <p>Terms & Conditions:</p>
        <p>You agree to share information entered on this page with APNA COLLEGE (owner of this page) and Razorpay, adhering to applicable laws.</p>
      </div>
      <div className="footer">
        <p>Want to create a page like this for your Business? Visit Razorpay Payment Pages to get started!</p>
        <button className="report-button">Report Page</button>
      </div>
    </div>
  );
}

export default PaymentPage;
