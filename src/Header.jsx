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
      <nav className={isOpen ? "nav-menu open" : "nav-menu hidden"}>
        <ul>
          <li>
            <a href="#my-home" onClick={() => setIsOpen(true)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" onClick={() => setIsOpen(true)}>
              About
            </a>
          </li>
          <li>
            <a href="#my-service" onClick={() => setIsOpen(true)}>
              Services
            </a>
          </li>
          <li>
            <a href="#my-skills" onClick={() => setIsOpen(true)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#my-jobs" onClick={() => setIsOpen(true)}>
              Jobs
            </a>
          </li>
          <li>
            <a href="#contact-me" onClick={() => setIsOpen(true)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
