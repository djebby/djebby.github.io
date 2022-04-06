import { useState, useEffect, useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import messaging from "../../assets/images/messaging.svg";
import "./index.scss";

init("7suhuS1Knmji5asTd");
const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_o1c3f9h", "template_z0c7e87", form.current).then(
      function (response) {
        alert("SUCCESS!");
      },
      function (error) {
        alert("FAILED...");
      }
    );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    plaeholder="Message"
                    name="message"
                    placeholder="Content"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <img src={messaging} alt="messaging pic" />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
