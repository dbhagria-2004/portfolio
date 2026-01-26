import { useState, useEffect } from "react";
import img1 from "../images/deepanshu1.png";
import img2 from "../images/deepanshu2.png";
import img3 from "../images/deepanshu3.png";
import img4 from "../images/deepanshu4.png";
import img5 from "../images/deepanshu5.png";

const images = [img1, img2, img3, img4, img5];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__intro">
        <p className="hero__kicker">Hi, I’m</p>
        <h1 className="hero__title">Deepanshu!</h1>
        <h2 className="hero__subtitle">
          Building Code, Crunching Data, Catching Bugs 🐛 — One Line at a Time ✨
        </h2>
        <p className="hero__desc">
          I build, learn, and create ML projects that solve everyday problems 🤖 <br />
          Fun fact: I love hiking 🥾 and exploring new trails whenever I can!
        </p>
      </div>

      <div className="hero__gallery">
        <button className="btn" onClick={prevImage}>
          ‹
        </button>

        <div className="hero__gallery-item">
          <img src={images[currentIndex]} alt={`Deepanshu ${currentIndex + 1}`} />
        </div>

        <button className="btn" onClick={nextImage}>
          ›
        </button>

        <div className="hero__nav-buttons">
          <button onClick={() => scrollToSection("Chat-Bot")}>Chat Bot</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </div>
      </div>

      <div className="hero__contact">
        <h3 className="hero__contact-title">Let’s Chat!</h3>
        <div className="hero__contact-links">
          <a className="btn" href="mailto:bhagriadeepanshu@outlook.com">Email me</a>
          <a className="btn" href="https://github.com/dbhagria-2004" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/dbhagria" target="_blank" rel="noreferrer">Linkedin</a>
          <a className="btn" href="https://www.instagram.com/deep_bhagria?igsh=dHNkdjNqeWFsNTJ4&utm_source=qr" target="_blank" rel="noreferrer">Instagram</a>
           <a className="btn" href="" target="_blank" rel="noreferrer"> Submit Form</a>
        </div>
      </div>
    </section>
  );
}