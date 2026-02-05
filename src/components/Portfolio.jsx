import React from "react";
import Image2 from "../assets/portfolio/w1.png";
import Image3 from "../assets/portfolio/w2.png";
import Image4 from "../assets/portfolio/w3.png";
import Image5 from "../assets/portfolio/w4.png";
import Image6 from "../assets/portfolio/w5.png";
import Image7 from "../assets/portfolio/w6.png";
import Image8 from "../assets/portfolio/w7.png";
import Image9 from "../assets/portfolio/w10.png";
import Image10 from "../assets/portfolio/w9.png";

import Image12 from "../assets/portfolio/fig1.png";
import Image13 from "../assets/portfolio/fig2.png";
import Image14 from "../assets/portfolio/fig3.png";
import Image15 from "../assets/portfolio/fig4.png";
import Image16 from "../assets/portfolio/fig5.png";
import Image17 from "../assets/portfolio/fig6.png";

import Image18 from "../assets/portfolio/post/creative53.jpg";
import Image19 from "../assets/portfolio/post/mpr2.jpg";
import Image20 from "../assets/portfolio/post/ecommerce.jpg";
import Image21 from "../assets/portfolio/post/led12.jpg";
import Image22 from "../assets/portfolio/post/wd23.jpg";
import Image23 from "../assets/portfolio/post/real18.jpg";
import Image24 from "../assets/portfolio/post/digital-marketing1.jpg";
import Image25 from "../assets/portfolio/post/valet-parking.jpg";
import Image26 from "../assets/portfolio/post/wd2.jpg";


const images = [
  { src: Image2, alt: "Project 1" },
  { src: Image3, alt: "Project 2" },
  { src: Image4, alt: "Project 3" },
  { src: Image5, alt: "Project 4" },
  { src: Image6, alt: "Project 5" },
  { src: Image7, alt: "Project 6" },
  { src: Image8, alt: "Project 7" },
  { src: Image9, alt: "Project 8" },
  { src: Image10, alt: "Project 9" }
];

const figmaimages = [
  { src: Image12, alt: "Project 1" },
  { src: Image13, alt: "Project 2" },
  { src: Image14, alt: "Project 3" },
  { src: Image15, alt: "Project 4" },
  { src: Image16, alt: "Project 5" },
  { src: Image17, alt: "Project 6" }
];

const graphicimages = [
  { src: Image18, alt: "Project 1" },
  { src: Image19, alt: "Project 2" },
  { src: Image20, alt: "Project 3" },
  { src: Image21, alt: "Project 4" },
  { src: Image22, alt: "Project 5" },
  { src: Image23, alt: "Project 6" },
  { src: Image24, alt: "Project 7" },
  { src: Image25, alt: "Project 8" },
  { src: Image26, alt: "Project 9" }

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
            <h2>WEB DESIGNS:</h2>
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

        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>FIGMA DESIGNS:</h2>
          </div>
        </div>
        <div className="row">
          {figmaimages.map((image, index) => (
            <div className="portfolio-item padd-15" key={index}>
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={image.src} alt={image.alt} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>GRAPHIC DESIGNS:</h2>
          </div>
        </div>
        <div className="row">
          {graphicimages.map((image, index) => (
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
