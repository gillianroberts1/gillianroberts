import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark.svg";
import { sendEmail } from "../helpers";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 CodeCarmenCita. All Rights Reserved.</p>

      <div className="social-icon">
        <a
          href="https://www.linkedin.com/in/gillian-roberts-4293804a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={navIcon1} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/gillianroberts1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={navIcon2} alt="Github" />
        </a>
      </div>
      <button className="connect" onClick={sendEmail}>
        <span>Let'Connect</span>
      </button>
    </footer>
  );
};

export default Footer;
