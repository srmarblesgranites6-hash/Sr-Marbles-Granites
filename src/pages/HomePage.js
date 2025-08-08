import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './HomePage.css';
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


const HomePage = () => {
  const slides = Array.from({ length: 11 }, (_, i) => `/images/slide${i + 1}.jpg`);
  const section3Images = Array.from({ length: 12 }, (_, i) => `/images/random${i + 1}.jpg`);

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scrollStep, 20);

    return () => clearInterval(interval);
  }, []);




  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      text: "SR Marbles & Granites transformed my home! The quality of marble and attention to detail was exceptional. Highly recommend!",
      image: "/images/testimonial1.jpg",
    },
    {
      name: "Jane Smith",
      text: "The granite countertops from SR Marbles & Granites added elegance to my kitchen. Professional service and great quality!",
      image: "/images/testimonial2.jpg",
    },
    {
      name: "Michael Brown",
      text: "Working with SR Marbles & Granites was a game changer for my office renovation. Their stonework is top-notch!",
      image: "/images/testimonial3.jpg",
    },
  ];

  const caseStudies = [
    { title: "Luxury Bathroom Renovation", img: "/images/case1.jpg" },
    { title: "Modern Office Interior", img: "/images/case2.jpg" },
    { title: "Elegant Kitchen Countertops", img: "/images/case3.jpg" },
  ];



  return (
    <div className="home-section1-wrapper">
      <Navbar />

      <section className="home-section1">
        <Swiper
          className="home-section1-slider"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
        >
          <SwiperSlide>
            <img src="/images/main1.jpg" alt="Marble 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/main2.jpg" alt="Marble 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/main3.jpg" alt="Marble 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/main4.jpg" alt="Marble 4" />
          </SwiperSlide>
        </Swiper>

        <div className="home-section1-overlay">
          <div className="home-section1-text">
            <h1 className="home-section1-heading">
              We provide<br />Ultimate Quality <br /> Marbles and Tiles.
            </h1>
            <p className="home-section1-description">
              Transform your space with premium quality tiles and marbles.<br />
              Discover an unmatched selection crafted with precision and care.
            </p>
          </div>
        </div>
      </section>




      <section className="home-section2">
        <h2 className="home-section2-title">
          Discover Our Finest Marbles and Granites Collections
        </h2>

        <Swiper
          className="home-section2-slider"
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          loop={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 40,
            depth: 200,
            stretch: 0,
            modifier: 1,
            slideShadows: false
          }}
          autoplay={{
            delay: 1700,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          speed={1000}
          allowTouchMove={false}
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <h3 className="home-section2-subtitle">
          Transform Your Space with World-Class Tiles
        </h3>
      </section>









      <section className="home-section6">
        <div className="home-section6-grid">
          {/* First Column */}
          <div className="home-section6-column">
            <div className="home-section6-number">01</div>
            <div className="home-section6-text">
              <h2 className="home-section6-heading">Design & Consultation</h2>
              <p className="home-section6-description">
                We collaborate with you to understand your vision and create a customized design plan that suits your style, budget, and timeline.
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div className="home-section6-column">
            <div className="home-section6-number">02</div>
            <div className="home-section6-text">
              <h2 className="home-section6-heading">Material Selection</h2>
              <p className="home-section6-description">
                We guide you in choosing the perfect materials and our skilled craftsmen bring your project to life with meticulous attention to detail.
              </p>
            </div>
          </div>

          {/* Third Column */}
          <div className="home-section6-column">
            <div className="home-section6-number">03</div>
            <div className="home-section6-text">
              <h2 className="home-section6-heading">Customer Satisfaction</h2>
              <p className="home-section6-description">
                We conduct thorough quality checks to ensure the final result meets our high standards, and we prioritize your satisfaction every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>







      <section className="home-section3">
        <div className="home-section3-grid">
          {section3Images.map((src, i) => (
            <div className="home-section3-item" key={i}>
              <img src={src} alt={`Random ${i + 1}`} />
            </div>
          ))}
        </div>
        <div className="home-section3-overlay">
          <div className="home-section3-center-text">
            <h2 className="home-section3-style">Try Our</h2>
            <h2 className="home-section3-count">100+</h2>
            <h2 className="home-section3-varieties">Varieties</h2>
          </div>
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















      <section className="home-section4-final">
        <h2 className="home-section4-title-final">Our Premium Collections</h2>
        <div className="home-section4-underline-final">
          <div className="line-final large-final"></div>
          <div className="line-final medium-final"></div>
          <div className="line-final small-final"></div>
        </div>
        <div className="home-section4-grid-final">
          <div className="home-section4-card-final">
            <div className="home-section4-text-final">
              <h3>Makrana <br />Marbles</h3>
            </div>
            <img src="/images/card1.jpg" alt="Makrana Marbles" />
          </div>
          <div className="home-section4-card-final">
            <div className="home-section4-text-final">
              <h3>China <br /> Varieties</h3>
            </div>
            <img src="/images/card2.jpg" alt="China Varieties" />
          </div>
          <div className="home-section4-card-final">
            <div className="home-section4-text-final">
              <h3>Italian <br />Varities</h3>
            </div>
            <img src="/images/card3.jpg" alt="Italian varieties" />
          </div>
          <div className="home-section4-card-final">
            <div className="home-section4-text-final">
              <h3>Rajasthan <br />Varieties</h3>
            </div>
            <img src="/images/card4.jpg" alt="Rajasthan Varieties" />
          </div>
        </div>
      </section>












      <section className="home-section8">
        <div className="home-section8-container">
          <div className="home-section8-left">
            <div className="home-section8-image-overlay">
              <img
                src="/images/marble-background.jpg"
                alt="Marble Interior"
                className="home-section8-background-image"
              />
              <div className="home-section8-overlay">
                <h1 className="home-section8-heading">Transform<br /> Your Space</h1>
                <p className="home-section8-subheading">
                  With the elegance of SR Marbles & Granites, make every
                  corner of your home or office shine.
                </p>
              </div>
            </div>
          </div>

          <div className="home-section8-right">
            <h2 className="home-section8-right-heading">
              The Art of Fine Marble Crafting
            </h2>
            <p className="home-section8-right-description">
              At SR Marbles & Granites, we are more than just suppliers. We
              are artisans who craft and customize marble and granite to
              perfection. Whether it's for your flooring, walls, or countertops,
              we bring quality and elegance to every surface we touch. Our wide
              selection includes marble, granite, and stones from the finest
              quarries to meet your exact needs.
            </p>

            <div className="home-section8-cta">
              <button className="cta-button">Explore Our Collections</button>
              <button className="cta-button">Get in Touch</button>
            </div>
          </div>
        </div>
      </section>










      <section className="home-section9">
  <div className="home-section9-container">
    {/* Left Section: Testimonial Carousel 
    <div className="home-section9-left">
      <h2 className="home-section9-heading">What Our Customers Say</h2>
      <div className="home-section9-carousel">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className={`testimonial ${activeIndex === index ? "active" : ""}`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-img"
                />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h3 className="testimonial-name">- {testimonial.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>  */}

    {/* Right Section: Case Studies */}
    <div className="home-section9-right">
      <h2 className="home-section9-right-heading">Our Featured Projects</h2>
      <div className="home-section9-casestudies">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="home-section9-case">
            <img
              src={caseStudy.img}
              alt={caseStudy.title}
              className="home-section9-case-img"
            />
            <div className="home-section9-case-overlay">
              <h3 className="home-section9-case-title">{caseStudy.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>





<section className="home-section10-final">
  <div className="home-section10-container-final">
    <div className="home-section10-left-final">
      <h2 className="home-section10-heading-final">Crafting Masterpieces with Marble</h2>
      <p className="home-section10-description-final">
        At SR Marbles & Granites, we don't just sell materials; we craft elegant works of art that bring your space to life. With years of expertise, we provide the highest quality marbles and granites, tailored to your specific vision. Whether it's for a luxury bathroom, kitchen countertops, or flooring, we transform stone into stunning masterpieces.
      </p>
    </div>

    <div className="home-section10-right-final">
      <Swiper
        className="home-section10-slider-final"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        <SwiperSlide>
          <img
            src="/images/marble-crafting1.jpeg"
            alt="Marble Crafting 1"
            className="home-section10-image-final"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/marble-crafting2.jpeg"
            alt="Marble Crafting 2"
            className="home-section10-image-final"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/marble-crafting3.jpeg"
            alt="Marble Crafting 3"
            className="home-section10-image-final"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</section>








      <Footer />
    </div>
  );
};

export default HomePage;
