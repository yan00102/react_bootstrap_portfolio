import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

export default function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        {" "}
        <p>
          Hello, my name is Neal Yan. I'm a graduated student with 2-year
          learning experience in Javascript, React, React Native, Node JS,
          MongoDB, Firebase.
        </p>
        <p>
          My dream is to one day start my own business and become an
          entrepreneur.
        </p>
        <p>
          I'm constantly learning new things. Currently those things include
          gaining more experience with React, React Native.
        </p>
        <p>
          My lastest project, Premegency Mobile App, is an assessment tool for
          paramedics. You can check it out{" "}
          <a
            href="https://github.com/yan00102/ESAppifyTeamProject_Premergency_mobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          , or on the homepage. It is built with React Native Expo Cli and Cloud
          Firebase.
        </p>
      </Content>
    </div>
  );
}
