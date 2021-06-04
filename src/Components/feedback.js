import React, { lazy } from "react";
import RangeSlider from "./RangeSlider";
import WorkWithUs from './WorkWithUs'

import Contact from './Contact'
import { Form, FormGroup, Input, Button } from "reactstrap";
import logo from "../assets/feedback.png";
import "../styles/feedback.css";
import "../styles/Contact.css";

export const Feedback = () => {
  return (
    <div>
      <div className="complete-screen">
        <h1 className="feedbackHead">Provide your feedback</h1>
        <div className="leftDiv">
          <div className="leftCol column">
            <p className="leftColHeading">Feel free to drop us your feedback</p>
            <p className="leftColPara">
              We are looking forward to hearing back from you
            </p>
            <div>
              <img className="imgBlock" src={logo} alt="" width="350px" />
            </div>
          </div>
          <div className="rightCol column">
            <p>How satisfied are you overall with our services?</p>
            <RangeSlider />
            <div className="formBlock">
              <Form>
                <FormGroup>
                  <textarea
                    name="text"
                    id="exampleText"
                    placeholder="Please tell us the reason for giving us this score .."
                  />
                </FormGroup>
                <Button className="btnDefault">Submit</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
      <Contact/>
      </div>
      <WorkWithUs/>
    </div>
  );
};
