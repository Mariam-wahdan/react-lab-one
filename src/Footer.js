import React from "react";

export const Footer = () => {
  return (
      <footer className="bg-light mt-auto p-4 text-center" >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Home</a></li>
              <li><a href="#" className="text-dark">Services</a></li>
              <li><a href="#" className="text-dark">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>
                Giza, Egypt
            </p>
            <p>
              Email: lab1@gmail.com
            </p>
            <p>
              Phone: +20 1095225632
            </p>
          </div>
        </div>
        <hr className="bg-white"/>
        <p className="mb-0">&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
