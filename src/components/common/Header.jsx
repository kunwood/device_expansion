import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.svg";
import logo_txt from "../../assets/img/logo_txt.svg";
import profileImg from "../../assets/img/profileImg.png";
import "../../assets/css/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import stay from "../../assets/img/stay.svg";
import food from "../../assets/img/food.svg";
import fun from "../../assets/img/fun.svg";
import point from "../../assets/img/point.svg";
import beauty from "../../assets/img/beauty.svg";
import delivery from "../../assets/img/delivery.svg";
import reporter from "../../assets/img/reporter.svg";
import center from "../../assets/img/center.svg";
import stay_h from "../../assets/img/stay_h.svg";
import food_h from "../../assets/img/food_h.svg";
import fun_h from "../../assets/img/fun_h.svg";
import point_h from "../../assets/img/point_h.svg";
import beauty_h from "../../assets/img/beauty_h.svg";
import delivery_h from "../../assets/img/delivery_h.svg";
import reporter_h from "../../assets/img/reporter_h.svg";
import center_h from "../../assets/img/center_h.svg";

const menuItems = [
  {
    name: "숙소",
    href: "/badgate",
    image: stay,
    hoverImage: stay_h,
  },
  {
    name: "맛집/카페",
    href: "/badgate",
    image: food,
    hoverImage: food_h,
  },
  {
    name: "여가",
    href: "/badgate",
    image: fun,
    hoverImage: fun_h,
  },
  {
    name: "포인트 캠페인",
    href: "/badgate",
    image: point,
    hoverImage: point_h,
  },
  {
    name: "뷰티/패션",
    href: "/badgate",
    image: beauty,
    hoverImage: beauty_h,
  },
  {
    name: "배송형",
    href: "/badgate",
    image: delivery,
    hoverImage: delivery_h,
  },
  {
    name: "기자단",
    href: "/badgate",
    image: reporter,
    hoverImage: reporter_h,
  },
  {
    name: "고객센터",
    href: "/badgate",
    image: center,
    hoverImage: center_h,
  },
];

const hambergerMenuItems = [
  {
    name: "국내",
    classStyle:
      " w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-1 col-end-2 row-start-1 row-end-2",
    href: "/badgate",
  },
  {
    name: "해외",
    classStyle:
      " w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-1 col-end-2 row-start-2 row-end-3",
    href: "/badgate",
  },
  {
    name: "방문",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-2 col-end-3 row-start-1 row-end-2",
    href: "/badgate",
  },
  {
    name: "배달",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-2 col-end-3 row-start-2 row-end-3",
    href: "/badgate",
  },
  {
    name: "클래스",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-3 col-end-4 row-start-1 row-end-2",
    href: "/badgate",
  },
  {
    name: "유아동",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-3 col-end-4 row-start-2 row-end-3",
    href: "/badgate",
  },
  {
    name: "공간대여",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-3 col-end-4 row-start-3 row-end-4",
    href: "/badgate",
  },
  {
    name: "네일아트",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-5 col-end-6 row-start-1 row-end-2",
    href: "/badgate",
  },
  {
    name: "헤어/클리닉",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-5 col-end-6 row-start-2 row-end-3",
    href: "/badgate",
  },
  {
    name: "눈썹/속눈썹",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-5 col-end-6 row-start-3 row-end-4",
    href: "/badgate",
  },
  {
    name: "피부/왁싱",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-5 col-end-6 row-start-4 row-end-5",
    href: "/badgate",
  },
  {
    name: "메이크업",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-5 col-end-6 row-start-5 row-end-6",
    href: "/badgate",
  },
  {
    name: "공지사항",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-8 col-end-9 row-start-1 row-end-2",
    href: "/badgate",
  },
  {
    name: "이용가이드",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-8 col-end-9 row-start-2 row-end-3",
    href: "/badgate",
  },
  {
    name: "자주묻는 질문",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-8 col-end-9 row-start-3 row-end-4",
    href: "/badgate",
  },
  {
    name: "1:1상담",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-8 col-end-9 row-start-4 row-end-5",
    href: "/badgate",
  },
  {
    name: "광고문의",
    classStyle:
      "w-rem1_5 py-2 text-rem1_7 text-black flex items-center justify-center",
    gridStyle: "col-start-8 col-end-9 row-start-5 row-end-6",
    href: "/badgate",
  },
];

/* eslint-disable */
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(true);
  let prevScroll = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScroll) {
        if (currentScrollPos > 30) {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(true);
      }
      prevScroll = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="z-5 bg-main_color top-0 h-rem0_7 w-full sticky">
      <ul
        className="list-none flex justify-between items-center pt-rem1_5 px-rem1_5"
        onMouseEnter={handleCloseMenu}
      >
        <li>
          <a
            href="/"
            className="bg-transparent flex mx-p4 w-rem2_0 overflow-hidden"
          >
            <img src={logo_txt} className="w-full h-full" alt="logo" />
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
        className={`
bg-main_color mt-rem1_5 w-full h-rem6_0 flex justify-evenly items-center sticky duration-100
${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
`}
      >
        <ul className="flex justify-between w-full -ml-10">
          <div>
            {isOpen && (
              <div className="absolute mt-rem5_5 ml-5 w-full h-rem30_0 shadow-lg bg-white bg-opacity-90">
                <ul
                  className="h-rem30_0 grid grid-cols-7 auto-cols-fr grid-rows-6 justify-center -mr-5 ml-2"
                  onMouseLeave={handleCloseMenu}
                >
                  {hambergerMenuItems.map((hembergerMenuItem, index) => (
                    <li
                      key={index}
                      className={`w-full py-2 text-rem1_7 text-black flex items-center justify-center ${hembergerMenuItem.gridStyle}`}
                    >
                      <a href={hembergerMenuItem.href}>
                        {hembergerMenuItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <a
                href={menuItem.href}
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
                  className="w-rem0_4 mr-2"
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
