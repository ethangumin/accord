import React from "react";
import { Link } from "react-router-dom";
import discordIcon from "../../../app/assets/images/discord-brands.svg";
// import BannerRight from "../../../app/assets/images/banner-r.svg";
// import BannerLeft from "../../../app/assets/images/banner-l.svg";
// import BannerMid from "../../../app/assets/images/banner-mid.svg";

const Splash = ({ currentUser, logout }) => {
  const enterButton = currentUser ? "Open Accord" : "Login";

  return (
    <div className="splash__bg">
      {/* <img src={BannerLeft} alt="banner-left" className="banner-left" />
      <img src={BannerMid} alt="banner-right" className="banner-mid" />
      <img src={BannerLeft} alt="banner-left" className="banner-left" /> */}
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
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
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
