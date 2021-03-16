import React from 'react';
import Fade from 'react-reveal/Fade'; 

const Cover = () => {
    return (
      <div className="bg-div" id="home">
        <div className="head mx-5">
          <div className="head-div mx-auto main-div">
          <Fade top cascade>
            <section className="div-1">
              <h1 className="my-1 head-div-first-text">Hi, Nama Saya</h1>
              <h1 className="head-div-second-text">Jabal Rahmatullah</h1>
              <h1 className="head-div-third-text">
                Watch and Learn.
              </h1>
            </section>
            </Fade>
          </div>
        </div>
      </div>
    );
}

export default Cover;

