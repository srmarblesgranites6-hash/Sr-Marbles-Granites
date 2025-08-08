import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebookF, FaLinkedin, FaChevronDown } from "react-icons/fa"; 
import "./Footer.css";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLinkClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0); 
      setLoading(false);
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
            <li><Link to="/collections#marble-slabs" onClick={() => handleLinkClick('/collections#marble-slabs')}>Marble Slabs</Link></li>
            <li><Link to="/collections#granite-slabs" onClick={() => handleLinkClick('/collections#granite-slabs')}>Granite Slabs</Link></li>
            <li><Link to="/collections#stone-tiles" onClick={() => handleLinkClick('/collections#stone-tiles')}>Stone Tiles</Link></li>
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
            <li>
              <Link to="/contact" onClick={() => handleLinkClick('/contact')} style={{ color: 'white', textDecoration: 'none' }}>
                Contact Us
              </Link>
            </li>
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
            <p><FaPhoneAlt /> +91 9704048939</p>
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
