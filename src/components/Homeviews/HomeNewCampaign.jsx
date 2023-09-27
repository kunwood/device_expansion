import React from "react";
import localCampaignImg1 from "../../assets/img/homeLocal/local1.png";
import localCampaignImg2 from "../../assets/img/homeLocal/local2.png";

function HomeNewCampaign() {
  return (
    <div className="bg-white rounded-3xl shadow-md">
      <div className="HomeLocalCampaignList">
        <div className="py-2 px-4 flex justify-between items-center">
          <span className="text-rem2_5 font-bold">새 캠페인</span>
          <a href="/campaign" className="text-rem1_2">
            더보기{" "}
            <span className="font-bold text-main_color text-rem1_5">+</span>
          </a>
        </div>
        <ul className="px-2 grid grid-cols-2 auto-rows-my_rows m-2">
          <li className="my-3">
            <a href="/campaign" className="localListLink">
              <img
                src={localCampaignImg1}
                className="float-left h-rem1_6 w-rem1_7 mr-1 mb-4 px-2"
                alt="캠페인이미지1"
              />
              <span className="inline text-rem1_1">
                <span>인스타그램 + 출사단</span>
                <span className="ml-4">방문형</span>
                <span className="block text-rem1_8 line-clamp-2">
                  [부산/광인리] 행복식당
                </span>
                <span className="block h-12 text-border_text_color text-base truncate line-clamp-2">
                  7만원 상당 골라먹자 식사권(회+조개구이+매운탕)
                </span>
                <span className="text-main_color inline-block w-fit font-bold text-rem1_2">
                  7일 남음
                </span>
                <span className="inline text-base ml-2">
                  리워드 10만원(1팀당 4인 필참입니다)
                </span>
                <span className="text-border-text-color ml-4 block text-base">
                  <span className="inline-block w-fit text-rem1_2 font-bold mr-4 text-black">
                    100,000P
                  </span>
                  신청 0/3명
                </span>
              </span>
            </a>
          </li>
          <li className="my-3">
            <a href="/campaign" className="localListLink">
              <img
                src={localCampaignImg2}
                className="float-left h-rem1_6 w-rem1_7 mr-1 mb-4 px-2"
                alt="캠페인이미지2"
              />
              <span className="inline text-rem1_1">
                <span>인스타그램 + 출사단</span>
                <span className="ml-4">방문형</span>
                <span className="block text-rem1_8 line-clamp-2">
                  [부산/광인리] 행복식당
                </span>
                <span className="block h-12 text-border_text_color text-base truncate line-clamp-2">
                  7만원 상당 골라먹자 식사권(회+조개구이+매운탕)
                </span>
                <span className="text-main_color inline-block w-fit font-bold text-rem1_2">
                  7일 남음
                </span>
                <span className="inline text-base ml-2">
                  리워드 10만원(1팀당 4인 필참입니다)
                </span>
                <span className="text-border-text-color ml-4 block text-base">
                  <span className="inline-block w-fit text-rem1_2 font-bold mr-4 text-black">
                    100,000P
                  </span>
                  신청 0/3명
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeNewCampaign;
