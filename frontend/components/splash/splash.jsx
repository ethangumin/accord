import React from "react";
import { Link } from "react-router-dom";

const Splash = ({ currentUser, logout }) => {
  const enterButton = currentUser ? "Open Discord" : "Login";

  return (
    <div className="splash__bg">
      <div className="splash container">
        <div className="splash__header">
          <h1>Accord</h1>
          <ul className="splash__nav">
            <li>Download</li>
            <li>Nitro</li>
            <li>Safety</li>
            <li>Support</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
          <Link
            className="splash__enter-btn"
            to={currentUser ? "/servers" : "/login"}
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
            <input
              type="button"
              value="Download"
              className="splash__download-btn"
            />
            <input
              type="button"
              value="Open Accord in your browser"
              className="splash__open-browser-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
