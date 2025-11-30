import { Container } from "./styles";
import krish from "../../assets/kimg.png";

// import python from "../../assets/python.svg"
// import java from "../../assets/java.svg"
// import wordpress from "../../assets/wordpress.svg";
// import shopify from "../../assets/shopify.svg";
// import typescriptIcon from "../../assets/typescript-icon.svg";
// import vueIcon from "../../assets/vue-icon.svg";

import boostrapIcon from "../../assets/bootstrap-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import mysql from "../../assets/mysql-icon.svg";
import tailwindcss from "../../assets/tailwind.jpg";
import next from "../../assets/nextjs.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import vscodeicon from "../../assets/vscode-icon.svg" ;


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Krishnamoorthi as a Front-End Developer with a strong foundation in modern web technologies, including HTML, CSS, Tailwind CSS, JavaScript, React.js, and Next.js. I specialize in building responsive, accessible, and high-performance user interfaces.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            In addition to front-end development, I have hands-on experience with SQL and Node.js, giving me a solid understanding of backend processes and full-stack application flow.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
           As a fresher, I bring enthusiasm, adaptability, and a strong willingness to learn. I am actively seeking opportunities where I can contribute to real-world projects, collaborate with experienced teams, and continue sharpening my technical and creative abilities.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Master of Computer Applications (MCA)</h4>
            <p>Sona College of Technology, Salem | July 2023 - April 2025</p>
            <p>8.00 CGPA</p>
          </div>
          <div className="education">
            <h4> Bachelor of Science in Computer Science (B.Sc.,(CS))</h4>
            <p>Vysya College, Salem | July 2020 - May 2023</p>
            <p>7.09 CGPA</p>
          </div>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
             <h3>Experience:</h3><h4>Software Developer</h4>
            <p>KIWIS AND BROWNIES IT SOLUTIONS | October 2024 - Present</p>
            <p>Bangalore, India</p>
          </div>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
        
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={next} alt="Next.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={mysql} alt="Mysql" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={nodeIcon} alt="Node.js" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={tailwindcss} alt="Tailwindcss" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={vscodeicon} alt="VS Code" />
            </ScrollAnimation>
          </div>
           {/*<div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div> */}
            {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div> */}
          
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={krish} alt="Krishnamoorthi" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
