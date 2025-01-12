import { useState, useEffect, useRef } from "react";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import messaging from "../../assets/images/messaging.svg";
import "./index.scss";


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
    const [name, email, subject, content] = [e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value];
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/send-email`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        content
      })
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log({ data });
    })
    .catch(err => alert(err));
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
            {`
              I am interested in freelance opportunities - especially ambitious or
              large projects. However, if you have other request or question,
              don't hesitate to contact me using below form either.
            `}
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
