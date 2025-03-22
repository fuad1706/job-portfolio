import { useState } from "react";
import "./Header.css"; // Import CSS file

export default function header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <h2>
        fuad<span>ade</span>
      </h2>

      {/* Hamburger Button for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navigation Menu */}
      <nav className={isOpen ? "nav-menu open" : "nav-menu"}>
        <ul>
          <li>
            <a href="#my-home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#my-service" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#my-skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#my-jobs" onClick={() => setIsOpen(false)}>
              Jobs
            </a>
          </li>
          <li>
            <a href="#contact-me" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
