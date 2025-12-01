import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container } from "./styles";
import Illustration from "../../assets/illustration.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";

export function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container id="home">
      <div className="hero-text">
        <p data-aos="fade-up">
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </p>

        <h1 data-aos="fade-up" data-aos-delay="200">Krishnamoorthi</h1>

        <h3 data-aos="fade-up" data-aos-delay="400">Frontend Developer</h3>

        <p className="small-resume" data-aos="fade-up" data-aos-delay="600">
          Fresher
        </p>

        <BrowserRouter>
          <NavHashLink
            smooth
            to="#contact"
            className="button"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Contact
          </NavHashLink>
        </BrowserRouter>

        <div className="social-media" data-aos="fade-up" data-aos-delay="1000">
          <a href="https://www.linkedin.com/in/krishnamoorthi-t" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://github.com/ezhilkrish002/" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a 
            href="https://api.whatsapp.com/send/?phone=%2B919345795629&text=Hello+krish+I+found+your+contact+through+portfolio+site.%0A%0A" 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={Illustration} alt="Illustration" data-aos="fade-right" data-aos-delay="1000" />
      </div>
    </Container>
  );
}
