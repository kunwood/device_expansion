import React from "react";
// import logo from "../../assets/img/logo.svg";
// import logo_x from "../../assets/img/logo_x.svg";
import logo from "../../assets/img/logo.svg";
import profileImg from "../../assets/img/profileImg.png";
import "../../assets/css/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <div className="header">
      <ul className="headerMenu">
        <li>
          <a href="/" className="logoBox">
            <img src={logo} className="logo" alt="logo" />
          </a>
        </li>
        <li className="searchArea">
          <input
            type="text"
            aria-label="searchBar"
            className="searchBar"
            placeholder="원하는 지역, 캠페인을 검색해 보세요"
          />
          <button aria-label="searchIcon" className="searchIcon">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>
        </li>
        <li className="icons">
          <button href="" aria-label="alarm" className="alarm">
            <FontAwesomeIcon icon={faBell} size="2x" />
          </button>
          <button href="" aria-label="profile" className="profile">
            <span className="userImgCircle">
              <img src={profileImg} alt="" className="userImg" />
            </span>
          </button>
        </li>
      </ul>
      <div className="campaignMenu"></div>
    </div>
  );
}

export default Header;
