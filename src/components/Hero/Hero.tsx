import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";

import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";

import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";

export function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <Container id="home">
      
      <div className="hero-text">

        <div data-aos="fade-up">
          <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h1>Krishnamoorthi</h1>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <h3>Frontend Developer</h3>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <p className="small-resume">Fresher</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="800">
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </div>

        <div data-aos="fade-up" data-aos-delay="1000">
          <div className="social-media">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/krishnamoorthi-t"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ezhilkrish002/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=%2B919345795629&text=Hello+krish+I+found+your+contact+through+portfolio+site.%0A%0A"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>

          </div>
        </div>

      </div>

      {/* HERO IMAGE */}
      <div className="hero-image">
        <div data-aos="fade-right" data-aos-delay="1000">
          <img src={Illustration} alt="Illustration" />
        </div>
      </div>

    </Container>
  );
}
