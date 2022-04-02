import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import sidebarLogo from "../../assets/images/sidebar-logo.png";
import "./index.scss";
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={sidebarLogo} alt="logo" />
      </Link>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} color="#fff" />
        </NavLink>
        <NavLink className="about-link" activeclassname="active" to="/about">
          <FontAwesomeIcon icon={faUser} color="#fff" />
        </NavLink>
        <NavLink className="contact-link" activeclassname="active" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#fff" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/djebby">
            <FontAwesomeIcon icon={faGithub} color="#fff" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/djebby-firas/">
            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/Firas_Djebby">
            <FontAwesomeIcon icon={faTwitter} color="#fff" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
