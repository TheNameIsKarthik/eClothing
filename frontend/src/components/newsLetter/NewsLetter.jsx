import React from "react";
import "./newsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribe to the newsletter and stay updated.</p>
      <div>
        <input type="email" placeholder="Your Email ID" />
        <button>Subscribe!</button>
      </div>
    </div>
  );
};

export default NewsLetter;
