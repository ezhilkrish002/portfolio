import styled from "styled-components";

export const Container = styled.section`
  padding-top: 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;

  .hero-text {
    & > p {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 6.5rem;
      font-weight: 700;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
      font-size: 2.4rem;
    }

    p.small-resume {
      margin-bottom: 3rem;
      font-size: 1.8rem;
    }
  }

  /* Contact button */
  .button {
    margin-top: 3rem;
    padding: 1.4rem 6rem;
    display: inline-block;
  }

  /* Social icons */
  .social-media {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1.4rem;

    img {
      width: 3.2rem;
      height: 3.2rem;
      transition: 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  /* Hero Image */
  .hero-image img {
    max-width: 480px;
  }

  /* 960px Tablet */
  @media (max-width: 960px) {
    padding-top: 20%;
    display: block;

    .hero-text {
      text-align: center;

      h1 {
        font-size: 5rem;
      }

      .button {
        margin-left: auto;
        margin-right: auto;
      }

      .social-media {
        justify-content: center;
      }
    }

    .hero-image {
      display: none;
    }
  }

  /* 600px - Smaller Mobile */
  @media (max-width: 600px) {
    padding-top: 30%;

    .hero-text h1 {
      font-size: 4rem;
    }
  }

  /* 480px - Very Small Devices */
  @media (max-width: 480px) {
    padding-top: 40%;

    .hero-text h1 {
      font-size: 3.4rem;
      line-height: 1.2;
    }

    .hero-text > p {
      font-size: 1.6rem;
    }
  }
`;
