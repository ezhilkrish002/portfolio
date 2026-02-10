import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import krish from "../../assets/kimg.png"

export function Header() {
  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    document.documentElement.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        
        {/* LOGO */}
        <HashLink smooth to="#home" className="logo">
          <span className="logo-img">
            <img src={krish} alt="Krishnamoorthi" />
          </span>
          <span className="logo-text">{"<KrishnaMoorthi/> "}</span>
        </HashLink>

        {/* DESKTOP THEME TOGGLE */}
        <div className="toggle-desktop">
          <input
            onChange={toggleTheme}
            className="container_toggle"
            type="checkbox"
            id="switch"
          />
          <label htmlFor="switch">Toggle</label>
        </div>

        {/* NAVIGATION */}
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>Home</NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>About me</NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>Project</NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>Contact</NavHashLink>

            {/* Resume button - visible on all devices
              Uses public path so builds won't fail if the asset isn't imported/bundled.
              Place `krishnamoorthi_frontend_developer.pdf` in the `public/` folder. */}
            <a href="/krishnamoorthi_frontend_developer.pdf" download className="button">Resume</a>

          {/* MOBILE THEME TOGGLE INSIDE MENU */}
          <div className="toggle-mobile">
            <input
              onChange={toggleTheme}
              className="container_toggle"
              type="checkbox"
              id="switch-mobile"
            />
            <label htmlFor="switch-mobile">Toggle</label>
          </div>
        </nav>

        {/* HAMBURGER BUTTON */}
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => setActive(!isActive)}
        ></div>

      </Router>
    </Container>
  )
}
