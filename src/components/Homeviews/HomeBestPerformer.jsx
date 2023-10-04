import React from "react";
import Slider from "react-slick";
import performer1 from "../../assets/img/performer1.svg";
import performer2 from "../../assets/img/performer2.svg";
import performer3 from "../../assets/img/performer3.svg";
import performer4 from "../../assets/img/performer4.svg";
import performer5 from "../../assets/img/performer5.svg";
import performer6 from "../../assets/img/performer6.svg";
import performer7 from "../../assets/img/performer4.svg";
import performer8 from "../../assets/img/performer1.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeBestPerformer() {
  const bestPerformer = [
    {
      name: "first",
      image: performer1,
    },
    {
      name: "second",
      image: performer2,
    },
    {
      name: "third",
      image: performer3,
    },
    {
      name: "fourth",
      image: performer4,
    },
    {
      name: "fifth",
      image: performer5,
    },
    {
      name: "sixth",
      image: performer6,
    },
    {
      name: "seventh",
      image: performer7,
    },
    {
      name: "eighth",
      image: performer8,
    },
  ];

  const sliderSettings = {
    infinite: false,
    slidesToShow: 4.1,
    slidesToScroll: 1,
    arrows: false,
  };

  const list = bestPerformer.map((performer, key) => {
    return (
      <div key={key} className="px-2 inline-block justify-center items-center">
        <img
          src={performer.image}
          alt={`퍼포머 이미지 ${performer + 1}`}
          className="w-rem1_3 mb-2 rounded-2xl"
        />
        <span className="text-rem1_8 text-gray-400 flex justify-center mb-3">
          {performer.name}
        </span>
      </div>
    );
  });

  return (
    <div className="bg-white rounded-3xl shadow-md">
      <div className="HomeLocalCampaignList">
        <div className="py-2 px-4 flex justify-between items-center">
          <span className="text-rem2_5 font-bold">이달의 베스트 블로거</span>
          <a href="/badgate" className="text-rem1_2">
            더보기{" "}
            <span className="font-bold text-main_color text-rem1_5">+</span>
          </a>
        </div>
        <Slider {...sliderSettings} className="mx-4 mt-7 mb-3 justify-center">
          {list.map((item, key) => (
            <div key={key} className="px-2" tabIndex="-1">
              {item}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeBestPerformer;
