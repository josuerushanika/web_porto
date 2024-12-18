import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
function Social() {
  return (
    <div className="social-container text-header-color text-3xl flex flex-row gap-24 pb-16 pt-16">
      <a href="https://github.com/josuerushanika" target="_blank">
        {" "}
        <BsGithub className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/josuerushanika/" target="_blank">
        <BsLinkedin className="social-icon" />
      </a>
      <a href="https://twitter.com/josuerushanika" target="_blank">
        <BsTwitter className="social-icon" />
      </a>
    </div>
  );
}
export default Social;
