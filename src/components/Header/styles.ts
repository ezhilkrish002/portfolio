import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;

  background-color: #21212150;
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  /* ---------------- LOGO ---------------- */
  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .logo-img img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #b0f808ff;
    padding: 2px;
    object-fit: cover;
  }

  .logo-text {
    font-size: 2rem;
    margin-left: 8px;
    font-weight: 500;
    color: #fff;
  }

  /* ------------ NAVIGATION ------------ */
  nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    a {
      color: #fff;
      padding: 0.6rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button {
        padding: 0.6rem 2rem;
      }

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  /* --------- HAMBURGER MENU --------- */
  .menu {
    width: 2rem;
    height: 0.2rem;
    background: #fff;
    position: relative;
    cursor: pointer;
    display: none;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: #fff;
      transition: 0.6s;
    }

    &:before {
      bottom: 0.5rem;
    }

    &:after {
      top: 0.5rem;
    }

    &.active {
      background-color: transparent;
    }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after {
      top: 0;
      transform: rotate(135deg);
    }
  }

  /* ---------------- TOGGLE SWITCH ---------------- */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
  }

  label:after {
    content: '';
    background: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: 0.32s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  /* -------- DESKTOP TOGGLE WRAPPER -------- */
  .toggle-desktop {
    display: flex;
    align-items: center;
  }

  /* -------- MOBILE TOGGLE (hidden until mobile) -------- */
  .toggle-mobile {
    display: none;
  }

  /* ---------------- RESPONSIVE ---------------- */
  @media (max-width: 960px) {
    padding: 1.8rem 3rem;

    /* Show hamburger */
    .menu {
      display: block;
    }

    /* --------- MOBILE NAV MENU --------- */
    nav {
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background-color: var(--green);
      gap: 2.5rem;
    }

    nav.active {
      opacity: 1;
      visibility: visible;
    }

    /* Hide name — show only image */
    .logo-text {
      display: none;
    }

    .logo-img {
      display: block;
    }

    /* Resume button centered nicely */
    nav .button {
      display: inline-block;
      font-size: 1.6rem;
      background-color: var(--pink);
      padding: 0.8rem 2.4rem;
      border-radius: 4px;
      text-align: center;
      margin-top: 1rem;
    }

    /* Hide desktop toggle in mobile */
    .toggle-desktop {
      display: none;
    }

    /* Show toggle inside menu */
    nav .toggle-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
    }
  }
`;
