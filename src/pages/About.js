import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './About.css';

function About() {


  return (
    <div className="about">
      <Navbar />


      <section className="about-section2">
  <div className="about-section2-container">
    <div className="about-section2-text-overlay">
      <h2 className="about-section2-heading">SR Marbles & Granites</h2>
      <p className="about-section2-description">
        We provide the finest quality marbles and granites, crafting timeless elegance for your home and office spaces. Discover our wide selection of premium materials.
      </p>
    </div>
    <img
      src="/images/about-main.jpg"
      alt="SR Marbles & Granites"
      className="about-section2-image"
    />
  </div>
</section>







      <section className="home-section7">
        <div className="home-section7-container">
          <div className="home-section7-left">
            <div className="home-section7-image-overlay">
              <img src="/images/sub-side1.jpg" alt="Marbles and Granites" className="home-section7-image" />
              <div className="home-section7-text-overlay">
                <h1 className="home-section7-heading">SR</h1>
                <p className="home-section7-subheading">Marbles & Granites</p>
              </div>
            </div>
          </div>

          <div className="home-section7-right">
            <h2 className="home-section7-right-heading">Crafting Elegance with Every Stone</h2>
            <p className="home-section7-right-description">
              At SR Marbles & Granites, we provide premium quality marbles and granites for all your architectural needs. From intricate flooring designs to majestic countertops, our materials are crafted to perfection, ensuring lasting beauty and durability for your space.
            </p>
          </div>
        </div>
      </section>


      <section className="about-section3">
  <div className="about-section3-container">
    <div className="about-section3-text">
      <h2 className="about-section3-heading">Meet Our Owner</h2>
      <p className="about-section3-description">
        Our company is led by a passionate individual dedicated to providing the highest quality marbles and granites. With years of expertise and a vision to bring elegance to every home, our owner ensures that every project meets the highest standards of craftsmanship.
      </p>
    </div>
    <div className="about-section3-image">
      <img src="/images/owner.jpg" alt="Owner of SR Marbles & Granites" className="about-section3-owner-image" />
    </div>
  </div>
</section>



<section className="about-section4">
  <div className="about-section4-container">
    <h2 className="about-section4-heading">Our Showroom</h2>
    <p className="about-section4-description">
      Take a look at our beautifully designed showroom where you can explore our wide selection of marbles, granites, and tiles. We provide a hands-on experience for our customers to view the quality and elegance of our products in person.
    </p>
    <div className="about-section4-images">
      <img src="/images/shop1.jpg" alt="Shop Image 1" className="about-section4-shop-image" />
      <img src="/images/shop2.jpg" alt="Shop Image 2" className="about-section4-shop-image" />
      <img src="/images/shop3.jpg" alt="Shop Image 3" className="about-section4-shop-image" />
    </div>
  </div>
</section>




      <section className="about-section1">
        <div className="about-section1-container">
          <div className="about-section1-left">
            <h2 className="about-section1-heading">About SR Marbles & Granites</h2>
            <p className="about-section1-description">
              At SR Marbles & Granites, we have been providing exceptional marble and granite products for over two decades. Our commitment to quality craftsmanship and customer satisfaction has made us a trusted name in the industry.
            </p>
            <p className="about-section1-description">
              Our team of skilled artisans ensures every stone is perfectly crafted and customized to meet the specific needs of our clients. We take pride in offering a wide range of marble and granite varieties for all your architectural and interior design needs.
            </p>
          </div>

          <div className="about-section1-right">
            <img
              src="/images/about2.jpeg"
              alt="Marble Crafting"
              className="about-section1-image"
            />
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

export default About;
