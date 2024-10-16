import React from "react";
import path from "../Images/josue.jpg";
import { BsFillPersonFill } from "react-icons/bs";

function About() {
  return (
    <div
      className="about-container content-center flex flex-col p-36"
      id="about"
    >
      <div className="icon-container flex justify-center text-4xl pb-3">
        <BsFillPersonFill className="text-coding-color" />
      </div>
      <h1 className="text-header-color font-title text-3xl font-bold text-center">
        About
      </h1>
      <div className="content-container  flex flex-row  justify-between">
        <div className="content py-20 md:text-2xl text-white w-1/2 flex ">
          <p>
            Hello, my name is Josue Rushanika and I am a{" "}
            <span className="text-coding-color">
              {" "}
              full-stack developer || Cyber Security || Network Engineer
            </span>{" "}
            with expertise in JavaScript, React,SQL,Redux, and Rails. I am a
            Tech Innovator, and Web developer and tech enthusiast who is
            passionate about building scalable efficient web applications and
            managing and optimizing complex IT infrastructures, including server
            administration, network configuration, and troubleshooting. I am
            currently working on a few personal projects, I am looking for a
            full time job I love to contribute to{" "}
            <span className="text-coding-color"> open source projects</span>
          </p>
        </div>
        <div className="personal-image py-7 ">
          <img src={path} alt="image" className="rounded-full w-3/4" />
        </div>
      </div>
      <div className="mobile-image  flex place-content-center md:hidden">
        <img src={path} alt="image" className="rounded-full w-3/4 p-8" />
      </div>
    </div>
  );
}
export default About;
