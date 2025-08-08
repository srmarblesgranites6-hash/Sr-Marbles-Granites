import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <Navbar />

      {/* Contact Section 1 */}
      <section className="contact-section1">
        <div className="contact-section1-container">
          <div className="contact-section1-left">
            <h2 className="contact-section1-heading">Get in Touch with SR Marbles & Granites</h2>
            <p className="contact-section1-description">
              Have questions or need assistance? We’re here to help! Whether you're planning a renovation, selecting materials, or seeking advice, our team is ready to assist you.
              Reach out to us using the contact details below or drop by our showroom for a personal consultation.
            </p>

            <div className="contact-section1-info">
              <h3>Contact Information:</h3>
              <p><strong>Phone:</strong> +91 9704048939</p>
              <p><strong>Email:</strong> srmarblesgranites6@gmail.com</p>
              <p><strong>Address:</strong> SR Marbles & Granites, Your City, India</p>
            </div>
          </div>

          <div className="contact-section1-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.0242433070152!2d83.90046977371416!3d18.300499475862495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c150f72a591fd%3A0x3cd19bbb831e0f56!2sSR%20Marbles%2C%20granites%20%26%20Tiles!5e0!3m2!1sen!2sin!4v1754641018086!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>


      <section className="contact-section2">
        <div className="contact-section2-container">

          <div className="contact-section2-right">
            <img
              src="/images/contact1.jpeg"
              alt="Marble Work"
              className="contact-section2-image"
            />
          </div>
          <div className="contact-section2-left">
            <h2 className="contact-section2-heading">Our Expertise</h2>
            <p className="contact-section2-description">
              At SR Marbles & Granites, we specialize in offering premium marble and granite solutions for a variety of applications. Whether you're looking for countertops, flooring, or other custom marble and granite work, our team ensures the highest standards of craftsmanship and quality.
            </p>

            <div className="contact-section2-info">
              <h3>Why Choose Us?</h3>
              <ul>
                <li>Top-quality materials from trusted quarries.</li>
                <li>Experienced artisans and craftsmen.</li>
                <li>Timely delivery and exceptional customer service.</li>
                <li>Customized solutions tailored to your needs.</li>
              </ul>
            </div>
          </div>


        </div>
      </section>


      <Footer />
    </div>
    
  );
};

export default Contact;
