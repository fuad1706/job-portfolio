import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Github from "../public/github.png";
import Twitter from "../public/twitter.png";
import Linkedin from "../public/linkedin.png";
import Alesh from "../public/alesh.jpg";
import Download from "../public/download.svg";
import Download1 from "../public/download-1.svg";
import Download2 from "../public/download-2.svg";
import Download3 from "../public/download-3.svg";
import Download4 from "../public/download-4.svg";
import Download5 from "../public/download-5.svg";
import Ps from "../public/adobe.png";
import Closingtag from "../public/closingtag.png";
import Graphics from "../public/graphicsdesign.png";
import Paperplane from "../public/paper-plane.png";
import Telephone from "../public/telephone.png";
import Loopstudio from "../public/loopstudio.jpg";
import Eazybank from "../public/eazybank.jpg";
import Whatsapp from "../public/whatsapp.png";
import Link from "../public/link.png";
import Sunnyside from "../public/sunnyside.png";
import Blogr from "../public/blogr.png";
import Adebakin from "../public/adebakin.pdf";
// import Cv from "../public/enevelope";

export default function Content() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      <div className="main-content">
        <div className="content" id="my-home">
          <div className="text" data-aos="fade-up">
            <h1>
              Hello, I'm <span>Fuad</span> <br /> a Front end Developer
            </h1>
            <p>
              I'm a frontend developer skilled in HTML, CSS, JavaScript,
              ReactJS, with <br /> a goal of solving complex societal problems
              Using 1's and 0's. I'm also <br /> interested in becoming a
              Fullstack, alongside my frontend development skills.
            </p>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/adebakin-fuad-11a6931a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linkedin} alt="linkedin" />
              </a>
              <a
                href="https://x.com/printsaf?s=21&t=xGu2DFvipzmXaZlfGavEOQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Twitter} alt="twitter" />
              </a>
              <a
                href="https://github.com/fuad1706"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="github" />
              </a>
            </div>
            <div className="bookme">
              <a className="book" href="#contact-me">
                Book Me
              </a>
            </div>
          </div>
          <img src={Alesh} alt="alesh" className="alesh" data-aos="zoom-in" />
        </div>
      </div>

      <div className="main-content-2">
        <div className="content-2" data-aos="fade-right">
          <h2
            id="about-me"
            onClick={() =>
              document
                .getElementById("nav-about-me")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{ cursor: "pointer" }}
          >
            About Me
          </h2>
          <h5>Get to Know Me</h5>
          <p>
            I'm a 2-year-old self-taught Frontend Developer focused on advancing
            in the tech field, <br /> with a strong interest in improving my
            skills. Currently, I'm on a FullStack self learning journey,
            <br /> working on various projects, including a Quiz App,
            chef-claude app using ReactJS and Vanilla CSS. <br /> My learning
            path includes mastering ReactJS, building responsive designs, and
            handling assets like
            <br /> QR codes in React applications. <br /> I am committed to
            continuously enhancing my web development capabilities.
          </p>
          <a href={Adebakin} download data-aos="flip-up">
            <button className="resume">Download Resume</button>
          </a>
        </div>
      </div>

      <div className="main-content-3" id="my-service">
        <h2>
          My <span>Services</span>
        </h2>
        <div className="content3" data-aos="zoom-in">
          <div className="content3a">
            <img src={Closingtag} alt="closingtag" />
            <h3>Frontend Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
              veniam? Repellat soluta cum porro aliquid ipsam, id ex, nihil
              doloremque adipisci enim assumenda doloribus, quaerat asperiores
              inventore laborum commodi eaque!
            </p>
            <button className="contact-Me">Contact Me</button>
          </div>
          <div className="content3b">
            <img src={Graphics} alt="graphicsdesign" />
            <h3>Graphics Designer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
              veniam? Repellat soluta cum porro aliquid ipsam, id ex, nihil
              doloremque adipisci enim assumenda doloribus, quaerat asperiores
              inventore laborum commodi eaque!
            </p>
            <button className="contact-Me">Contact Me</button>
          </div>
        </div>
      </div>
      <div className="main-content-4" id="my-skills">
        <h3>
          My <span>Skills</span>
        </h3>
        <div className="content4" data-aos="fade-right">
          <img src={Download} alt="download" />
          <img src={Download1} alt="download" />
          <img src={Download2} alt="download" />
          <img src={Download3} alt="download" />
          <img src={Download4} alt="download" />
          <img src={Download5} alt="download" />
          <img className="ps" src={Ps} alt="download" />
        </div>
      </div>

      <div className="main-content-5" id="my-jobs">
        <h3>
          My <span>Jobs</span>
        </h3>
        <div className="job-boxa" data-aos="fade-right">
          <div className="job-box-1">
            <img src={Loopstudio} alt="loopstudio" />
            <a
              href="https://loop-studio-gray.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Link} alt="Link" className="link" />
            </a>
          </div>
          <div className="job-box-2">
            <img src={Eazybank} alt="eazybank" />
            <a
              href="https://eazy-bank-opal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Link} alt="Link" className="link" />
            </a>
          </div>
          {/* <div className="job-box-3"></div> */}
        </div>
        <div className="job-boxb" data-aos="fade-right">
          <div className="job-box-4">
            <img src={Sunnyside} alt="sunnyside" />
            <a
              href="https://sunny-side-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Link} alt="Link" className="link" />
            </a>
          </div>
          <div className="job-box-5">
            <img src={Blogr} alt="blogr" />
            <a
              href="https://blogr-black.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Link} alt="Link" className="link" />
            </a>
          </div>
          {/* <div className="job-box-6"></div> */}
        </div>
      </div>

      <div className="contact-me" id="contact-me">
        <div className="contact-mea">
          <h3>
            Contact <span>Me</span>
          </h3>
          <h5>Lets Work Together</h5>
          <p>
            Feel free to get in touch with me for any inquiries, collaborations,
            or project discussions. I'm <br /> excited to hear from you and
            explore how we can work together to create exceptional digital
            <br />
            experiences.
          </p>
          <p>
            <img src={Paperplane} alt="paperplane" />
            fuadadebakin@gmail.com
          </p>
          <p>
            <img src={Telephone} alt="telephone" />
            +2347085977737
          </p>
          <a
            href="https://www.linkedin.com/in/adebakin-fuad-11a6931a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" className="linkedin" />
          </a>
          <a
            href="https://x.com/printsaf?s=21&t=xGu2DFvipzmXaZlfGavEOQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="twitter" className="twitter" />
          </a>
          <a
            href="https://github.com/fuad1706"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" className="github" />
          </a>
        </div>
        <div className="contact-meb">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Leave a Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ display: isVisible ? "flex" : "none" }}
      >
        ↑
      </button>
      <div className="whatsapp">
        <a
          href="https://wa.me/2347085977737?text=Hello%20AF,%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whatsapp} alt="whatsapp" />
        </a>
      </div>
      <footer>
        <div className="footer-content">
          <h5>Developed with ❤️ by Adebakin Fuad © 2025</h5>
        </div>
      </footer>
    </main>
  );
}
