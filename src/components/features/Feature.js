import React from "react";
import { BsWindowSidebar } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "./Feature.css";
//import { FaAccessibleIcon } from "react-icons/fa";
//import { BsHexagon } from "react-icons/bs";
const btnClick = () => {
  console.log('Im here')
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSfkJ-2DkAv9Zzwr_iVxwmsCUS69o4ODacSn2SkjB-7LKKQh2Q/viewform')
  }  
const Feature = ({ applyNow, heading, text }) => {
  return (
    <div className="feature-text">
      <h3>{heading}</h3>
      <p className="u-text-small">{text}</p>
      <div>
         <button btnClass={"btn-light"} onClick={btnClick.bind(this)} >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Feature;
