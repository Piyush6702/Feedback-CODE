
import "../styles/Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

function Contact() {
  return (
    <section className="ContactSection">
      <div className="ContactDivs">
        <div className="contactDetails">

            <h2>Contact Details</h2>
            <div className="codeAddress">
              <FontAwesomeIcon icon={faGlobe} color="orange" size="2x" />
              <div className="Address-Content">
                <h4>Permanent Address</h4>
                <p>KochaBhawar BIET,Jhansi</p>
              </div>
            </div>
            <div className="codeAddress">
              <FontAwesomeIcon icon={faPhone} color="orange" size="2x" />
              <div className="Address-Content">
                <h4>Call us</h4>
                <p>9811818802 , 0554-88885455</p>
              </div>
            </div>
            <div className="codeAddress">
              <FontAwesomeIcon icon={faEnvelope} color="orange" size="2x" />
              <div className="Address-Content">
                <h4>Mail us</h4>
                <p>gauti@123unplaced.com</p>
              </div>
            </div>

        </div>
        <div className="ContactForm">
          <form >
            <input type="text" required placeholder="Your Name"></input>
            <input type="email" required placeholder="Your Email"></input>
            <input type="number" required placeholder="Contact number"></input>
            <textarea required placeholder="Type your message here*" className="textareaContactDetails" rows='4'></textarea>
            <button type="submit " className="btn-hover color-4">Send message</button>
          </form>
        </div>
      </div>
      <br></br>
      <p className='Infotext'>
        Don't worry, no spam here! Your information will only be used for
        C.O.D.E and Chrome related updates<br></br> and our emails are typically
        no more than 1-2 times a month. You can unsubscribe anytime.
      </p>
      <br></br>
    </section>
  );
}

export default Contact;
