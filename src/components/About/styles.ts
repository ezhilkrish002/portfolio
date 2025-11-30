import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  /* Hard Skills */
  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    justify-content: flex-start;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  /* Text */
  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  /* IMAGE CONTAINER */
 .about-image {
  width: 100%;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
}

/* Yellow circle behind the image */
.about-image::before {
  content: "";
  position: absolute;
  top: 20%; /* moved lower so glow stays below */
  left: 50%;
  transform: translate(-50%, -10%); /* pushes glow downward */
  width: 38rem;
  height: 38rem;
  background: yellow;
  border-radius: 50%;
  z-index: 0;
  
  /* controlled glow under the image */
  filter: blur(40px);
  opacity: 0.8;
}

/* Main profile image */
.about-image img {
  margin-top: 10rem;
  width: 65%;
  border-radius: 50%;
  padding: 1rem;
  background: yellow;
  z-index: 2;

  transition: 
    transform 0.4s ease,
    box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0px 18px 40px rgba(255, 220, 0, 0.45);
  }
}


  /* Mobile View */
  @media (max-width: 480px) {
    display: block;
    text-align: center;

    .about-image img {
      width: 70%;
      margin-top: 3rem;
    }

    .hard-skills {
      justify-content: center;
    }
  }

  /* Tablet View */
  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .about-image img {
      width: 65%;
    }

    .hard-skills {
      justify-content: center;
    }
  }
`;
