import React from "react";
import localCampaignImg1 from "../../../assets/img/homeLocal/local1.png";
import localCampaignImg2 from "../../../assets/img/homeLocal/local2.png";
import localCampaignImg3 from "../../../assets/img/homeLocal/local3.png";
import localCampaignImg4 from "../../../assets/img/homeLocal/local4.png";

const LocalCampaign = () => {
  // 백엔드 연동하면 하나로 정리
  const localCampaignList = [
    {
      type1: "인스타그램",
      type2: "출사단",
      site: "방문형",
      title: "[부산/광안리]행복식당",
      contents: "7만원 상당 골라먹자 식사권(회+조개구이+매운탕)",
      dDay: "7",
      support: "리워드 10만원",
      limit: "한팀당 4명 필수입니다.",
      image: localCampaignImg1,
      point: "100,000",
      apply: "0/3",
    },
    {
      type1: "블로그",
      type2: "영수증리뷰",
      site: "방문형",
      title: "[부산]마장동김씨 남포점",
      contents: "5만원 상당 2인세트 + 사이드메뉴1",
      dDay: "6",
      support: "",
      limit: "",
      image: localCampaignImg2,
      point: "20,000",
      apply: "1/2",
    },
    {
      type1: "인스타그램",
      type2: "",
      site: "방문형",
      title: "[부산]광안리 아일드블루",
      contents: "2만원 식사권",
      dDay: "24",
      support: "",
      limit: "",
      image: localCampaignImg3,
      point: "",
      apply: "0/10",
    },
    {
      type1: "블로그",
      type2: "영수증리뷰",
      site: "방문형",
      title: "[부산/남구]철인7호 경성대점",
      contents:
        "오리지날+난리세트 or 매떡치킨(순살) + 난리세트 or 핫매료치킨 + 로제 떡복이",
      dDay: "3",
      support: "",
      limit: "",
      image: localCampaignImg4,
      point: "",
      apply: "3/5",
    },
    {
      type1: "인스타그램",
      type2: "출사단",
      site: "방문형",
      title: "[부산/광안리]행복식당",
      contents: "7만원 상당 골라먹자 식사권(회+조개구이+매운탕)",
      dDay: "7",
      support: "리워드 10만원",
      limit: "한팀당 4명 필수입니다.",
      image: localCampaignImg1,
      point: "100,000",
      apply: "0/3",
    },
    {
      type1: "블로그",
      type2: "영수증리뷰",
      site: "방문형",
      title: "[부산]마장동김씨 남포점",
      contents: "5만원 상당 2인세트 + 사이드메뉴1",
      dDay: "6",
      support: "",
      limit: "",
      image: localCampaignImg2,
      point: "20,000",
      apply: "1/2",
    },
    {
      type1: "인스타그램",
      type2: "",
      site: "방문형",
      title: "[부산]광안리 아일드블루",
      contents: "2만원 식사권",
      dDay: "24",
      support: "",
      limit: "",
      image: localCampaignImg3,
      point: "",
      apply: "0/10",
    },
    {
      type1: "블로그",
      type2: "영수증리뷰",
      site: "방문형",
      title: "[부산/남구]철인7호 경성대점",
      contents:
        "오리지날+난리세트 or 매떡치킨(순살) + 난리세트 or 핫매료치킨 + 로제 떡복이",
      dDay: "3",
      support: "",
      limit: "",
      image: localCampaignImg4,
      point: "",
      apply: "3/5",
    },
  ];

  const list = localCampaignList.map((campaign, key) => {
    return (
      <li
        key={key}
        className="mb-rem0_7 mx-rem1_5 h-rem30_0 rounded-2xl shadow-xl overflow-hidden"
      >
        <a href="/campaign" className="localListLink">
          <img
            src={campaign.image}
            alt={`캠페인 이미지 ${campaign + 1}`}
            className="float-left h-rem30_0 w-rem30_0 mr-4"
          />
          <span className="text-rem1_5 h-rem30_0">
            <span>
              <br />
              {campaign.type1} + {campaign.type2}
              <span className="ml-4">{campaign.site}</span>
            </span>
            <span className="block text-rem2_5 truncate line-clamp-1 my-2">
              {campaign.title}
            </span>
            <span className="block h-rem1_3 leading-rem1_9 text-rem1_7 tracking-wide text-border_text_color text-base line-clamp-2">
              {campaign.contents}
            </span>
            <span className="text-main_color inline-block w-fit font-bold text-rem1_6">
              {campaign.dDay}일 남음
            </span>
            <span
              className={`inline text-base mx-2 text-rem1_3 ${
                campaign.support === "" ? "hidden" : ""
              }`}
            >
              {campaign.support}
            </span>
            <span
              className={`inline text-base mx-2 text-rem1_3 ${
                campaign.limit === "" ? "hidden" : ""
              }`}
            >
              {campaign.limit}
            </span>
            <span className="text-border-text-color ml-4 block text-base text-rem1_5">
              <span
                className={`inline-block w-fit text-rem1_5 font-bold mr-4 text-black ${
                  campaign.point === "" ? "hidden" : ""
                }`}
              >
                {campaign.point}P
              </span>
              신청 {campaign.apply} 명
            </span>
          </span>
        </a>
      </li>
    );
  });

  return (
    <div className="bg-white mt-rem0_7">
      <div className="HomeLocalCampaignList">
        <div className="p-8">
          <span className="text-rem3_0 font-bold">캠페인</span>
        </div>
        <ul className="mt-0 grid grid-cols-2 auto-rows-my_rows mx-rem0_7 my-rem5_0">
          {list}
        </ul>
      </div>
    </div>
  );
};

export default LocalCampaign;
