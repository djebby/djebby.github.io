import { useState, useEffect } from "react";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import AnimatedLetters from "../AnimatedLetters";
import mongoDb from "../../assets/images/mongodb.png";
import nodeJs from "../../assets/images/nodejs.svg";
import typeScript from "../../assets/images/typescript.svg";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious full stack web developer, i mainly use ReactJS in
            frontend, NodeJS/ExpressJS in backend and MongoDB as database.
          </p>
          <p>
            I always loved coding, I love diving into complex problems and
            solving them, I have several project in my github profile that i
            invite you to take look at them.
          </p>
          <p>
            I'am basically a self-taught developer and i have a bachelor's
            degree in network and telecommunication, I'm also interested in
            development of iot and cyber physical systems.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={nodeJs} alt="nodejs svg icon" />
            </div>
            <div className="face2">
              <img src={mongoDb} alt="mongodb" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <img src={typeScript} alt="typescript" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
