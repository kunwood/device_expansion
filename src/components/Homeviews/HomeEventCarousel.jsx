import React from "react";
import ad1 from "../../assets/img/ad1.png";
import ad2 from "../../assets/img/ad2.png";
import ad3 from "../../assets/img/ad3.png";

function HomeEventCarousel() {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden">
      <a href="/event">
        <img src={ad1} alt="" />
      </a>
      <a href="/event">
        <img src={ad2} alt="" />
      </a>
      <a href="/event">
        <img src={ad3} alt="" />
      </a>
    </div>
  );
}

export default HomeEventCarousel;
