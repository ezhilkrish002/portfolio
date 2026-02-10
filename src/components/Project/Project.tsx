import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";

// List of projects (can also come from props or API)
const projects = [
  {
    title: "Next.js E-Commerce Web Application ",
    description:
      "Developed a responsive e-commerce web application using Next.js with Redux Toolkit for global state management and Tailwind CSS for modern UI styling, implementing centralized state management for product listings, cart data, and user interactions. Integrated REST APIs to fetch and handle dynamic product data, and incorporated the WhatsApp API to automatically send product and user details to the admin when users initiate a purchase, enabling real-time order communication. Optimized UI performance and ensured responsive design across mobile and desktop devices using component-based architecture and clean code practices to deliver a seamless and maintainable user experience.",
    tech: ["Next.js", "Tailwindcss", "Redux" , "Whatsapp API integration"],
    github: "https://github.com/ezhilkrish002/ecom",
    live: "https://ecom-ecru-ten.vercel.app/",
  },
  {
    title: "E-Commerce Website in React.js",
    description:"Designed and developed a responsive e-commerce web application using React.js with Redux Toolkit for global state management Implemented product listing, category filtering, and cart functionality using centralized Redux store Managed application state efficiently across components using slices, actions, and reducers Integrated REST APIs to fetch and display dynamic product data Built reusable and modular React components to improve maintainability and scalability Optimized UI performance and ensured seamless responsiveness across mobile and desktop devices Followed clean code practices and component-based architecture for better user experience.",
    tech: ["React.js", "Tailwindcss", "Redux", "REST API"],
    github: "https://github.com/ezhilkrish002/E-commerce",
    live: "https://ecom-ecru-ten.vercel.app/",
  },
    {
    title: "Virtual Mouse Using Machine Learning",
    description:
      "Developed a virtual mouse application that enables cursor control and mouse functions without a physical mouse using hand gesture recognition. Utilized MediaPipe for real-time hand tracking and OpenCV for gesture detection to map hand movements to mouse actions, and implemented machine learning algorithms to accurately recognize gestures and translate them into mouse events such as click, scroll, and drag. Optimized real-time performance to ensure smooth, responsive, and intuitive hands-free computer interaction while maintaining a high-quality user experience.",
    tech: ["Python", "OpenCV", "MediaPipe", "Machine Learning"],
    github:
      "https://github.com/ezhilkrish002/virtual_mouse",
    live: null,
  },
   {
    title: "A Portfolio using React",
    description:
      "A web-based platform that enables users to browse, order, and receive medical supplies from registered suppliers, improving accessibility to essential healthcare products. Implemented responsive UI design and intuitive navigation to enhance user experience across devices. Integrated product search, category filtering, and order management features to streamline the purchasing process, while following modular and clean code practices to ensure maintainability and scalability of the application.",
    tech: ["React.js", "Tailwindcss","TypeScript"],
    github:
      "https://github.com/ezhilkrish002/portfolio",
    live: "https://krishportfolio-seven.vercel.app/",
  },
 {
    title: "Restaurant Billing System",
    description:
      "Restaurant Billing System that automates order entry, billing, and receipt generation, improving accuracy and efficiency in a restaurant’s daily operations. Implemented a user‑friendly interface for selecting menu items, calculating totals with taxes, and applying discounts, ensuring seamless and error‑free bill creation. Integrated functionality to store transaction details and generate printable receipts for customers, enhancing the billing workflow. Followed modular design and clean coding practices to maintain scalability and ease of maintenance.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    github:
      "https://github.com/ezhilkrish002/bill",
    live: null,
  },

    {
    title: "Online Medical Products Supply",
    description:
      "A web-based platform that enables users to browse, order, and receive medical supplies from registered suppliers, improving accessibility to essential healthcare products. Implemented responsive UI design and intuitive navigation to enhance user experience across devices. Integrated product search, category filtering, and order management features to streamline the purchasing process, while following modular and clean code practices to ensure maintainability and scalability of the application.",
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
