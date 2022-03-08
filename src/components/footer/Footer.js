import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="https://tafadzwa-app.vercel.app/#">&bull; Home</a>
            <a href="https://tafadzwa-app.vercel.app/#features">&bull; About</a>
            <a href="https://tafadzwa-app.vercel.app/#faq">&bull; Recruitment</a>
            <a href="https://tafadzwa-app.vercel.app/#download">&bull; Target</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSePliqqVx3bKY01egx2OIPGndveTCC-D88xOwp9P1_RAXiu2g/viewform?usp=sf_link">&bull; Application</a>
          </div>
        
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="https://www.facebook.com/Tafadzwa-Consulting-530892300334863/?_rdr">&bull; Facebook</a>
            <a href="https://twitter.com/tafadzwaconsult">&bull; Twitter</a>
            <a href="https://www.linkedin.com/company/tafadzwa-consulting">&bull; LinkedIn</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; : +27 11 438 4300
            </p>
            <p>
              <FaEnvelope /> &nbsp; : zoliswa@tafadzwa.co.za
            </p>
            <p>
              <FaGlobe /> &nbsp; : www.tafadzwa.co.za
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={logo} alt="logo" href="href=https://tafadzwa-app.vercel.app/#" />
          <p className="u-text-small">&copy; Copyright 2022. <a href="href=http://www.webparam.co.za/">Webparam</a></p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
