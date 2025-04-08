import React from "react";
import Image2 from "../assets/portfolio/w1.png";
import Image3 from "../assets/portfolio/w2.png";
import Image4 from "../assets/portfolio/w3.png";
import Image5 from "../assets/portfolio/w4.png";
import Image6 from "../assets/portfolio/w5.png";
import Image7 from "../assets/portfolio/w6.png";
import Image8 from "../assets/portfolio/w7.png";
import Image9 from "../assets/portfolio/w8.png";
import Image10 from "../assets/portfolio/w9.png";
import Image11 from "../assets/portfolio/w10.png";

const images = [
  { src: Image2, alt: "Project 1" },
  { src: Image3, alt: "Project 2" },
  { src: Image4, alt: "Project 3" },
  { src: Image5, alt: "Project 4" },
  { src: Image6, alt: "Project 5" },
  { src: Image7, alt: "Project 6" },
  { src: Image8, alt: "Project 7" },
  { src: Image9, alt: "Project 8" },
  { src: Image10, alt: "Project 9" },
  { src: Image11, alt: "Project 10" },
];

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects:</h2>
          </div>
        </div>
        <div className="row">
          {images.map((image, index) => (
            <div className="portfolio-item padd-15" key={index}>
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={image.src} alt={image.alt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
