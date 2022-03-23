import React from "react";
import { Link } from "react-router-dom";
import discordIcon from "../../../app/assets/images/discord-brands.svg";

const Splash = ({ currentUser, logout }) => {
  const enterButton = currentUser ? "Open Discord" : "Login";

  return (
    <div className="splash__bg">
      <div className="splash container">
        <div className="splash__header">
          <div className="splash__logo">
            <img src={discordIcon} alt="accord-logo" />
            <h1>Accord</h1>
          </div>
          <ul className="splash__nav">
            <li>
              <a
                href="https://www.linkedin.com/in/ethan-gumin-2959b996/"
                className="social-link"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/ethangumin" className="social-link">
                Github
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/ethan-gumin" className="social-link">
                AngelList
              </a>
            </li>
          </ul>
          <Link
            className="splash__enter-btn"
            to={currentUser ? "/home" : "/login"}
            // to={currentUser ? "/server/1/channel/1" : "/login"}
          >
            {enterButton}
          </Link>
        </div>
        <div className="splash__content">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
            magnam eum numquam exercitationem neque nemo inventore quisquam
            optio tempore placeat nesciunt dolor earum quibusdam consectetur
            sequi fugiat tenetur quasi quis?
          </p>
          <div className="splash__btns">
            {/* <Link to={currentUser ? "/server/1/channel/1" : "/login"}> */}
            <Link to={currentUser ? "/home" : "/login"}>
              <input
                type="button"
                value="Jump In"
                className="splash__download-btn"
              />
            </Link>
            {/* <Link to={currentUser ? "/server/1/channel/1" : "/login"}> */}
            <Link to={currentUser ? "/home" : "/login"}>
              <input
                type="button"
                value="Open Accord in your browser"
                className="splash__open-browser-btn"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
