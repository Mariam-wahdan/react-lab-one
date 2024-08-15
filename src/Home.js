import React from "react";
import logo from "./logo.svg"; 


export const Home = () => {
  let title = "first";
  
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg border-0" style={{ width: "24rem" }}>
        {title === "first" ? (
          <>
            <img src={logo} className="card-img-top rounded-top" alt="Logo" />
            <div className="card-body text-center">
              <h5 className="card-title text-primary">Welcome to the First Page</h5>
              <p className="card-text">
                The title of the article is set to "first". This is your starting point.
              </p>
              <a href="#" className="btn btn-outline-primary rounded-pill px-4">
                Explore
              </a>
            </div>
          </>
        ) 
        :
        (
          <div className="card-body text-center">
            <h5 className="card-title text-secondary">Second Page</h5>
            <p className="card-text">
              The title of the article is set to "second". You've navigated to the second option.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
