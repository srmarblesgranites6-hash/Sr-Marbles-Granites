import React, { useEffect } from 'react';
import './Collections.css';
import Navbar from './Navbar';
import Footer from './Footer';


const items = [
  { img: 'slide-show1.jpg' },
  { img: 'slide-show2.jpg' },
  { img: 'slide-show3.jpg' },
  { img: 'slide-show4.jpg' },
  { img: 'slide-show5.jpg' },
  { img: 'slide-show6.jpg' },
  { img: 'slide-show7.jpg' },
  { img: 'slide-show8.jpg' }
];
const Collections = () => {
    
  const slides = Array.from({ length: 11 }, (_, i) => `/images/slide${i + 1}.jpg`);
  const section3Images = Array.from({ length: 12 }, (_, i) => `/images/random${i + 1}.jpg`);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
    const collections = [
        {
            brand: "Makrana Marbles",
            model: "Elegant White",
            description: "Makrana Marble is known for its pristine white color and flawless texture. Ideal for luxurious flooring.",
            image: "/images/makrana-marble.jpeg",
        },
        {
            brand: "Italian Marble",
            model: "Classic Beige",
            description: "Italian marble exudes luxury and elegance, perfect for modern and sophisticated interiors.",
            image: "/images/italian-marble.jpeg",
        },
        {
            brand: "Rajasthan Granites",
            model: "Royal Color",
            description: "Rajasthan Granites offers a unique blend of strength and beauty, a perfect choice for kitchen countertops.",
            image: "/images/rajasthan-granite.jpeg",
        },
        {
            brand: "China Varieties",
            model: "Pure Blue",
            description: "Chinese marble provides stunning aesthetics with clean lines, suitable for any living space.",
            image: "/images/china-marble.jpeg",
        },
    ];

    return (
        <div className="collections-page-wrapper">
            <Navbar />
            <div className="collections-section1">
                <div className="collections-section1-heading-container">
                    <h2 className="collections-section1-heading">Discover Our Marble & Granite Collections</h2>
                    <p className="collections-section1-description">
                        We offer a wide variety of high-quality marbles, granites, and tiles suitable for all your needs.
                        Whether you're looking for elegant flooring, luxurious countertops, or decorative walls, we have the perfect solution for you.
                    </p>
                </div>
                <div className="collections-section1-images">
                    <div className="collections-image-item">
                        <h3 className="collections-image-heading">Premium Marbles</h3>
                        <img src="/images/collection-marble.jpg" alt="Makrana Marbles" className="collections-image" />
                    </div>
                    <div className="collections-image-item">
                        <h3 className="collections-image-heading">Elegant Granites</h3>
                        <img src="/images/collection-granite.jpg" alt="Italian Marbles" className="collections-image" />
                    </div>
                    <div className="collections-image-item">
                        <h3 className="collections-image-heading">High-Quality Tiles</h3>
                        <img src="/images/collection-tiles.jpg" alt="Rajasthan Granites" className="collections-image" />
                    </div>
                </div>
            </div>

            <div className="collections-container">
                <h2 className="collections-heading">Our Premium Collections</h2>
                <div className="collections-grid">
                    {collections.map((collection, index) => (
                        <div key={index} className="collection-card">
                            <img src={collection.image} alt={`${collection.brand} ${collection.model}`} className="collection-image" />
                            <div className="collection-info">
                                <h3 className="collection-brand">{collection.brand}</h3>
                                <p className="collection-model">{collection.model}</p>
                                <p className="collection-description">{collection.description}</p>
                                {/*<button className="collection-btn">Learn More</button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="home-section5">
        <div className="home-section5-heading">
          <h2>Trending Collection</h2>
          <div className="home-section5-underline">
            <div className="line large"></div>
            <div className="line medium"></div>
            <div className="line small"></div>
          </div>
        </div>
        <div className="home-section5-slider">
          <div className="home-section5-slider-track">
            {[...items, ...items].map((item, index) => (
              <div className="home-section5-card" key={index}>
                <img src={`/images/${item.img}`} alt={`Slide ${index + 1}`} />
                {/* <button>Buy Now</button> */}
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="collections-section2">
    <div className="collections-section2-container">
        <div className="collections-section2-text">
            <h2 className="collections-section2-heading">Why Choose Our Collections?</h2>
            <p className="collections-section2-description">
                Our marble and granite collections are crafted to perfection, offering unmatched quality and luxury. Whether you're redesigning your home, office, or a commercial space, our products bring sophistication, strength, and durability.
            </p>
        </div>
        <div className="collections-section2-images">
            <div className="collections-image-box">
                <img src="/images/collection-quality.jpg" alt="High Quality" className="collections-section2-image" />
                <h3 className="collections-image-caption">Top Quality Materials</h3>
            </div>
            <div className="collections-image-box">
                <img src="/images/collection-innovation.jpg" alt="Innovative Designs" className="collections-section2-image" />
                <h3 className="collections-image-caption">Innovative Designs</h3>
            </div>
            <div className="collections-image-box">
                <img src="/images/collection-affordable.jpg" alt="Affordable Prices" className="collections-section2-image" />
                <h3 className="collections-image-caption">Affordable Prices</h3>
            </div>
        </div>
    </div>
</section>



      
            <Footer />
        </div>
    );
};

export default Collections;
