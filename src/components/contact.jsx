import React from "react";
import { Fade } from 'react-reveal';


const Contact = () => {
  return (
    <div className="contact-div" id="contact">
      <div className="head mx-5">
        <div className="main-div">
        <Fade top cascade>
          <section className="div-1 contact">
            <h1 className="my-3 heading" style={{textAlign:"center"}}>Get In Touch</h1>
            <p>
              Need something? I'm always here to answer your
              querstions. Click on the button below, drop a message and I'll try my
              best to anwer that!
            </p>
            <a
              href="mailto:jabalrahmatullah6@gmail.com"
              className="button btn btn-outline-success my-3"
            >
              Say Hello
            </a>
          </section>
          </Fade>
          <p className="footer">© Jabal Rahmatullah</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
