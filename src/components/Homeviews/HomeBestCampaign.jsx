import React from "react";
import localCampaignImg1 from "../../assets/img/homeLocal/local1.png";
import localCampaignImg2 from "../../assets/img/homeLocal/local2.png";
import localCampaignImg3 from "../../assets/img/homeLocal/local3.png";

const HomeBestCampaign = () => {
  const bestCampaign = [
    {
      type1: "인스타그램",
      type2: "출사단",
      site: "방문형",
      title: "[부산/광안리]행복식당",
      contents:
        "7만원 상당 골라먹자 식사권(회+조개구이+매운탕)  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis id suscipit temporibus explicabo, maxime facilis vel. Nobis voluptate minus quis, veniam adipisci iure tempora, iste praesentium numquam itaque odit dolorum?",
      dDay: "7",
      support: "10",
      limit: "4",
      image: localCampaignImg1,
      point: "100,000",
      apply: "0/3",
    },
    {
      type1: "인스타그램",
      type2: "출사단",
      site: "방문형",
      title: "[부산/광안리]행복식당",
      contents:
        "7만원 상당 골라먹자 식사권(회+조개구이+매운탕)  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis id suscipit temporibus explicabo, maxime facilis vel. Nobis voluptate minus quis, veniam adipisci iure tempora, iste praesentium numquam itaque odit dolorum?",
      dDay: "7",
      support: "10",
      limit: "4",
      image: localCampaignImg2,
      point: "100,000",
      apply: "0/3",
    },
    {
      type1: "인스타그램",
      type2: "출사단",
      site: "방문형",
      title: "[부산/광안리]행복식당",
      contents:
        "7만원 상당 골라먹자 식사권(회+조개구이+매운탕)  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis id suscipit temporibus explicabo, maxime facilis vel. Nobis voluptate minus quis, veniam adipisci iure tempora, iste praesentium numquam itaque odit dolorum?",
      dDay: "7",
      support: "10",
      limit: "4",
      image: localCampaignImg3,
      point: "100,000",
      apply: "0/3",
    },
  ];

  const list = bestCampaign.map((campaign, key) => {
    return (
      <li key={key} className="my-3 mx-2">
        <a href="/campaign" className="localListLink">
          <img
            src={campaign.image}
            alt={`캠페인 이미지 ${campaign + 1}`}
            className="block w-rem1_8 mr-2"
          />
          <div className="w-rem1_8">
            <span className="inline text-rem1_1">
              <span>
                {campaign.type1}+{campaign.type2}
              </span>
              <span className="ml-4">{campaign.site}</span>
              <span className="block text-rem1_8 truncate line-clamp-1">
                {campaign.title}
              </span>
              <span className="block h-12 text-border_text_color text-base line-clamp-2 truncate">
                {campaign.contents}
              </span>
              <span className="text-main_color inline-block w-fit font-bold text-rem1_2">
                {campaign.dDay}일 남음
              </span>
              <span className="inline text-base ml-2">
                리워드 {campaign.support}만원(1팀당 {campaign.limit}명
                필참입니다)
              </span>
              <span className="text-border-text-color ml-4 block text-base">
                <span className="inline-block w-fit text-rem1_2 font-bold -ml-4 mr-4 text-black">
                  {campaign.point}P
                </span>
                신청 {campaign.apply} 명
              </span>
            </span>
          </div>
        </a>
      </li>
    );
  });

  return (
    <div className="bg-white rounded-3xl shadow-md relative">
      <div className="HomeLocalCampaignList">
        <div className="py-2 px-4 flex justify-between items-center">
          <span className="text-rem2_5 font-bold">인기 캠페인</span>
          <a href="/campaign" className="text-rem1_2">
            더보기{" "}
            <span className="font-bold text-main_color text-rem1_5">+</span>
          </a>
        </div>
        <ul className="px-6 flex flex-wrap justify-between">{list}</ul>
      </div>
    </div>
  );
};

export default HomeBestCampaign;
