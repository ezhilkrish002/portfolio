import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  /* ---------------- TEXT AREA ---------------- */

  .about-text {
    p {
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
      margin-bottom: 1.6rem;
      line-height: 2.8rem;
    }

    h2 {
      display: inline-block;
      margin-bottom: 2rem;
      font-size: 3rem;
      color: var(--green);
    }

    h3 {
      margin-top: 2rem;
      color: var(--green);
    }
  }

  /* ---------------- SKILLS ---------------- */

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    justify-content: flex-start;
  }

  .hability img {
    width: 3.4rem;
    transition: 0.3s ease;
  }

  .hability img:hover {
    transform: scale(1.15);
  }

  /* ---------------- IMAGE SECTION ---------------- */

  .about-image {
    width: 100%;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
  }

  /* Yellow glow behind image (adjust per device) */
  .about-image::before {
    content: "";
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 40rem;
    height: 40rem;
    background: yellow;
    border-radius: 50%;
    opacity: 0.7;
    z-index: 0;
    filter: blur(45px);
    transition: 0.3s ease;
  }

  /* Main image - DESKTOP ONLY (reduced size) */
  .about-image img {
    margin-top: 10rem;
    width: 50%;        /* 🔥 reduced from 65% → 50% */
    border-radius: 50%;
    padding: 1rem;
    background: yellow;
    z-index: 2;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: scale(1.06);
      box-shadow: 0px 18px 40px rgba(255, 220, 0, 0.45);
    }
  }

  /* ------------------------------------------------
      TABLET (max-width: 960px)
  ------------------------------------------------ */
  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .about-image img {
      width: 60%;
      margin-top: 6rem;
    }

    .about-image::before {
      width: 28rem;
      height: 28rem;
      filter: blur(35px);
      top: 20%;
    }

    .hard-skills {
      justify-content: center;
    }
  }

  /* ------------------------------------------------
      MOBILE (max-width: 480px)
  ------------------------------------------------ */
  @media (max-width: 480px) {
    display: block;
    text-align: center;

    .about-image img {
      width: 70%;
      margin-top: 4rem;
    }

    .about-image::before {
      width: 25rem;
      height: 25rem;
      top: 30%;
      filter: blur(25px);
      opacity: 0.6;
    }

    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-bottom: 1.4rem;
    }

    .hard-skills {
      justify-content: center;
      gap: 1.6rem;
    }
  }
`;
