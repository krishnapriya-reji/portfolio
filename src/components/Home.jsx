import React, { useEffect } from 'react'
import Image1 from "../assets/hero.jpg";
import Typed from "typed.js"
const Home = () => {
    useEffect(() => {
        const options = {
            strings: ["Web Designer", "Graphics Designer", "Web Developer", "Frontend Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        };

        const typed = new Typed(".typed", options);
        return () => {
            typed.destroy();
        };
    }, []);

  return (
    
    <section className="home section active" id="home">
    <div className="container">
        <div className="row">
            <div className="home-info padd-15">
                <h3 className="hello">Hello my name is <span className="name">Krishnapriya Reji</span></h3>
                <h3 className="my-profession">I'm a <span className="typed">Frontend Developer</span></h3>
                <p>Creative and detail-oriented Frontend Developer with 5 years of experience in crafting visually appealing,
                     highly responsive, and user-centric web applications. Skilled in translating complex design concepts into 
                     seamless digital experiences, ensuring optimal performance across devices. Proficient in modern frontend technologies,
                     UI/UX best practices, and interactive design principles.  </p>
                    <a href="../../public/Krishnapriya-resume.pdf" target = "_blank" className="btn" >Download CV</a>
            </div>
            </div>
    </div>
</section>
  )
}

export default Home
