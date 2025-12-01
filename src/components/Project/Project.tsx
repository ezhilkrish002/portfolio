import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";

// List of projects (can also come from props or API)
const projects = [
  {
    title: "E-Commerce Website in Next.js",
    description:
      "The E-Commerce Website frontend is developed using Next.js, providing a fast, responsive, and seamless shopping experience…",
    tech: ["Next.js", "Tailwindcss", "Redux"],
    github: "https://github.com/ezhilkrish002/ecom",
    live: "ecom-ecru-ten.vercel.app",
  },
 {
    title: "Restaurant Billing System",
    description:
      "The Restaurant Billing System is a web-based application built using HTML, CSS, PHP…",
    tech: ["HTML", "CSS", "PHP"],
    github:
      "https://github.com/ezhilkrish002/bill",
    live: null,
  },
  {
    title: "Virtual Mouse Using Machine Learning",
    description:
      "A system that performs mouse functions through real-time hand gestures…",
    tech: ["OpenCV", "MediaPipe", "scikit-learn"],
    github:
      "https://github.com/ezhilkrish002",
    live: null,
  },
    {
    title: "Online Medical Products Supply",
    description:
      "Developed a secure medical products supply platform with CRUD functionality…",
    tech: ["PHP", "HTML", "CSS", "MySQL"],
    github:
      "https://github.com/ezhilkrish002",
    live: null,
  },
];

export function Project() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // animation time
      once: true, // animate only once
    });

    // Refresh in case DOM updates dynamically
    AOS.refresh();
  }, []);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" data-aos="flip-left" key={index}>
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={externalLink} alt="Visit site" />
                  </a>
                )}
              </div>
            </header>

            <div className="body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <footer>
              <ul className="tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </footer>
          </div>
        ))}
      </div>
    </Container>
  );
}
