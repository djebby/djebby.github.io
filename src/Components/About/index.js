import { useState, useEffect } from "react";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import AnimatedLetters from "../AnimatedLetters";
import mongoDb from "../../assets/images/mongodb.svg";
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
        <p>paragraph 1 </p>
        <p>paragraph 2</p>
        <p>paragraph 3</p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faNode} color="#83cd29" />
          </div>
          <div className="face2">
          <img src={mongoDb} alt="mongodb"/>
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face4">
            {/* <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> */}
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
