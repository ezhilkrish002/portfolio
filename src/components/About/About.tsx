import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container } from "./styles";
import krish from "../../assets/kimg.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import next from "../../assets/nextjs.jpg";
import mysql from "../../assets/mysql-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import tailwindcss from "../../assets/tailwind.jpg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import vscodeicon from "../../assets/vscode-icon.svg";

export function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container id="about">
      <div className="about-text">
        <h2 data-aos="fade-left">About me</h2>
        <p data-aos="fade-left" data-aos-delay="100">
          Hi there! I'm Krishnamoorthi, a Front-End Developer with skills in HTML, CSS, Tailwind CSS, JavaScript, React.js, and Next.js.
        </p>
        <p data-aos="fade-left" data-aos-delay="200">
          I also have hands-on experience with SQL and Node.js, giving me a solid understanding of backend processes.
        </p>
        <p data-aos="fade-left" data-aos-delay="300">
          I am actively seeking opportunities to contribute to real-world projects and collaborate with experienced teams.
        </p>

        <div className="education" data-aos="fade-left" data-aos-delay="400">
          <h3>Education:</h3>
          <h4>Master of Computer Applications (MCA)</h4>
          <p>Sona College of Technology, Salem | July 2023 - April 2025 | 8.00 CGPA</p>
          <h4>Bachelor of Science in Computer Science (B.Sc.,CS)</h4>
          <p>Vysya College, Salem | July 2020 - May 2023 | 7.09 CGPA</p>
        </div>

        <h3 data-aos="fade-left" data-aos-delay="500">Here are my main skills:</h3>
        <div className="hard-skills">
          {[htmlIcon, cssIcon, jsIcon, reactIcon, next, mysql, nodeIcon, tailwindcss, boostrapIcon, vscodeicon].map((icon, index) => (
            <div className="hability" key={index} data-aos="fade-up" data-aos-delay={100 + index * 50}>
              <img src={icon} alt="Skill" />
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <img src={krish} alt="Krishnamoorthi" data-aos="fade-right" data-aos-delay="200" />
      </div>
    </Container>
  );
}
