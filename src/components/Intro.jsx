import React from "react";
import { TypeAnimation } from 'react-type-animation';
import imagePath from '../Images/programmer.svg'
function Intro() {
  const handleClick = () => {
    window.location.href = "mailto:josuerushanika@gmail.com"
};

  return (
    <div className="intro-container flex-col p-28 ">
      <div className="illustration float-right ">
        <img src={imagePath} alt="programmer" />
      </div>
      <div className="intro-header  text-2xl font-bold py-1">
        <h1 className="text-sm text-coding-color font-coding-font">Hi there, I am </h1>
        <h2 className="text-7xl text-gray-light pt-5 font-main-font dev-name">Josue Rushanika</h2>
        <h2 className="text-5xl text-header-color font-main-font pt-2 dev-animation">
          <TypeAnimation
            sequence={[
              'Full Stack Software Developer',
              1000,
              '',
              1000,
              ' Back-end Develloper',
              1000,
              ' Data-base Administrator',
              1000,
              ' Network Engineer',
              1000,
              ' Cyber Security & Offensive Security',
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </h2>

      </div>
      <div className="intro__content">

        <p className="text-gray-light text-lg md:w-1/2 font-coding-font pt-9  ">
          I am a <span className="text-coding-color">full-stack developer || Cyber Security || Network Engineer </span>who build sleek and responsive web applications  and managing and optimizing complex IT infrastructures, including server<br /> 
            I am looking for a full time job  
          
        </p>
        <div className="intro-buttons  flex gap-8 w-1/4 pt-9 text-gray-light">
          <button onClick={handleClick} className="bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white rounded text-lg">Hire me </button>
          <button  className="bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white rounded text-lg"><a href='#projects'>See Projects </a> </button>
        </div>
      </div>
    </div>
  );
}
export default Intro;