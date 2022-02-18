import React from "react";
import image from "/Users/lauren/SEI/unit2/Project-2/project-2-react/src/assets/IMG_0313.jpg";

const About = () => {
  return (
    <div>
      <img className="my-character" src={image} alt='character' />
      <h1>Thank you so much for checking out my site!</h1>
      <h2>My name is Lauren!</h2>
      <p className="description">
        I created this project for my software engineering immersive bootcamp.
        We were tasked with using an API to pull data and create a react app
        from scratch. I had so much fun working on this project and hope you
        found it useful.
      </p>
      <br />
      <p className="description">
        Check out some of my other projects:{" "}
        <a href="https://github.com/LaurenColvin">GitHub portfolio</a>
      </p>
    </div>
  );
};

export default About;
