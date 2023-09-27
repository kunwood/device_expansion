import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.svg";
import profileImg from "../../assets/img/profileImg.png";
import "../../assets/css/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import stay from "../../assets/img/stay.svg";
import food from "../../assets/img/food.svg";
import fun from "../../assets/img/fun.svg";
import stay_h from "../../assets/img/stay_h.svg";
import food_h from "../../assets/img/food_h.svg";
import fun_h from "../../assets/img/fun_h.svg";

const menuItems = [
  {
    name: "숙소",
    image: stay,
    hoverImage: stay_h,
  },
  {
    name: "맛집/카페",
    image: food,
    hoverImage: food_h,
  },
  {
    name: "여가",
    image: fun,
    hoverImage: fun_h,
  },
  {
    name: "포인트 캠페인",
    image: food,
    hoverImage: food_h,
  },
  {
    name: "뷰티/패션",
    image: food,
    hoverImage: food_h,
  },
  {
    name: "배송형",
    image: food,
    hoverImage: food_h,
  },
  {
    name: "기자단",
    image: food,
    hoverImage: food_h,
  },
  {
    name: "고객센터",
    image: food,
    hoverImage: food_h,
  },
];

function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const [isScrolled, setIsScrolled] = useState(true);
  let prevScrollpos = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollpos) {
        if (currentScrollPos > 30) {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(true);
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="z-5 bg-main_color top-0 h-rem0_7 w-full sticky">
      <ul className="list-none flex justify-between items-center pt-rem1_5 px-rem1_5">
        <li>
          <a
            href="/"
            className="bg-transparent flex mx-p4 w-rem2_0 overflow-hidden"
          >
            <img src={logo} className="w-full h-full" alt="logo" />
          </a>
        </li>
        <li className="h-rem4_0 w-p40 max-w-full bg-transparent mx-p1 flex">
          <input
            type="text"
            aria-label="searchBar"
            className="searchBar bg-transparent h-full w-p90 outline-0 border-white border-b-r0_2 opacity-50 text-rem2_0 text-white transition duration-200 ease-out"
            placeholder="원하는 지역, 캠페인을 검색해 보세요"
          />
          <button
            aria-label="searchIcon"
            className="text-white h-full w-rem0_4 outline-0 border-0 bg-transparent"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
          </button>
        </li>
        <li className="min-w-fit justify-between flex w-p8 bg-transparent items-center">
          <button
            href=""
            aria-label="alarm"
            className="min-w-fit mr-rem0_2 w-p30 h-full bg-transparent outline-0 border-0 text-white"
          >
            <FontAwesomeIcon icon={faBell} size="2x" />
          </button>
          <button
            href="/"
            aria-label="profile"
            className="min-w-fit mr-rem0_2 w-p30 h-full bg-transparent outline-0 border-0"
          >
            <span className="m-rem4_0">
              <img
                src={profileImg}
                alt=""
                className="rounded-p50 h-profile w-profile"
              />
            </span>
          </button>
        </li>
      </ul>
      <div
        className={`bg-main_color mt-rem1_5 w-full h-rem6_0 flex justify-evenly items-center sticky ${
          isScrolled
            ? "translate-y-0 opacity-100 "
            : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex justify-around w-full mx-rem0_2">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <a
                href="/"
                className={`rounded-2xl bg-transparent w-rem1_5 py-2 text-rem1_7 text-white flex items-center justify-center hover:bg-white transition-colors duration-300 ${
                  hoveredItem === index ? "hover:text-main_color" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={
                    hoveredItem === index ? menuItem.hoverImage : menuItem.image
                  }
                  alt=""
                  className="w-[4rem] mr-2"
                />
                {menuItem.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
