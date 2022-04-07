import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import Logo from "../../assets/images/f-logo.png";
import homeIllustration from "../../assets/images/home-draw.svg";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["i", "r", "a", "s"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];
  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass("text-animate-hover");
    }, 4000)
  }, []);
  return (
    <>
      <div className="container">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={Logo} alt="Junior Full Stack Developer Name" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2>Full Stack Developer / MERN Stack</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <img
          className="home-illustration"
          src={homeIllustration}
          alt="programmer"
        />
      </div>
      <Loader type="pacman"/>
    </>
  );
};

export default Home;