import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebookF, FaLinkedin, FaChevronDown } from "react-icons/fa";  // Import FaChevronDown here
import "./Footer.css";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLinkClick = (path, scrollToId = null) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
      setLoading(false);
      if (scrollToId) {
        setTimeout(() => {
          const section = document.getElementById(scrollToId);
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }, 200);
  };

  const handleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="ganesh1-homepage-footer">
      <div className="ganesh1-footer-section">
        <div className="ganesh1-footer-left ganesh1-footer-left-final">
          <div className="ganesh1-footer-left-top-final">
            <span className="footer-heading">SR Marbles & Granites</span>
          </div><br />
          <span>We provide a wide range of premium quality marbles and granites. Let us help you choose the perfect material for your project, ensuring durability and elegance.</span>
        </div>

        <div className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${openSection === "playgroup" ? "open" : ""}`}>
          <div className="ganesh1-footer-list-header" onClick={() => handleAccordion("playgroup")}>
            <span>Products</span>
            <span className={`ganesh1-toggle-icon ganesh1-mobile-only ${openSection === "playgroup" ? "open" : ""}`}>
              <FaChevronDown />
            </span>
          </div>
          <ul className="ganesh1-sub-list">
            <li>Marble Slabs</li>
            <li>Granite Slabs</li>
            <li>Stone Tiles</li>
          </ul>
        </div>

        <div className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${openSection === "daycare" ? "open" : ""}`}>
          <div className="ganesh1-footer-list-header" onClick={() => handleAccordion("daycare")}>
            <span>Support &nbsp; &nbsp;</span>
            <span className={`ganesh1-toggle-icon ganesh1-mobile-only ${openSection === "daycare" ? "open" : ""}`}>
              <FaChevronDown />
            </span>
          </div>
          <ul className="ganesh1-sub-list">
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${openSection === "contact" ? "open" : ""}`}>
          <div className="ganesh1-footer-list-header" onClick={() => handleAccordion("contact")}>
            <span>Contact Us</span>
            <span className={`ganesh1-toggle-icon ganesh1-mobile-only ${openSection === "contact" ? "open" : ""}`}>
              <FaChevronDown />
            </span>
          </div>
          <div className="ganesh1-contact-details">
            <p><FaPhoneAlt /> +91 9898989898</p>
            <p><FaEnvelope /> srmarblesgranites6@gmail.com</p>
          </div>
          <div className="ganesh1-footer-social">
            <span>Social Media</span>
            <div className="ganesh1-social-icons">
              <a href="https://www.instagram.com/chvapps/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.instagram.com/chvapps/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/in/chvapps/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
