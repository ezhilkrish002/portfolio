import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";

export function Project() {

  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation time
      once: true,       // animate only once
    });
  }, []);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* Project 1 */}
        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" 
              viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1"
              strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="project-links">
              <a href="https://github.com/CodeVinayak/MultilingualVQA" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </header>

          <div className="body">
            <h3>E-Commerce Website in Next.js</h3>
            <p>
              The E-Commerce Website frontend is developed using Next.js, providing a fast,
              responsive, and seamless shopping experience…
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>Next.js</li>
              <li>Tailwindcss</li>
              <li>Redux</li>
            </ul>
          </footer>
        </div>


        {/* Project 2 */}
        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img"
              viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1"
              strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="project-links">
              <a href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History" 
                target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>

          <div className="body">
            <h3>Online Medical Products Supply</h3>
            <p>
              Developed a secure medical products supply platform with CRUD functionality…
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>PHP</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>MySQL</li>
            </ul>
          </footer>
        </div>


        {/* Project 3 */}
        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img"
              viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1"
              strokeLinecap="round" strokeLinejoin="round">
              <title>Code</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="project-links">
              <a href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation" 
                target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>

          <div className="body">
            <h3>Virtual Mouse Using Machine Learning</h3>
            <p>
              A system that performs mouse functions through real-time hand gestures…
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>OpenCV</li>
              <li>MediaPipe</li>
              <li>scikit-learn</li>
            </ul>
          </footer>
        </div>


        {/* Project 4 */}
        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img"
              viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1"
              strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="project-links">
              <a href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis" 
                target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
            </div>
          </header>

          <div className="body">
            <h3>Restaurant Billing System</h3>
            <p>
              The Restaurant Billing System is a web-based application built using HTML, CSS, PHP…
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>PHP</li>
            </ul>
          </footer>
        </div>

      </div>
    </Container>
  );
}
