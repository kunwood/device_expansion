import React from "react";
import localCampaignImg1 from "../../assets/img/homeLocal/local1.png";
import localCampaignImg2 from "../../assets/img/homeLocal/local2.png";
import localCampaignImg3 from "../../assets/img/homeLocal/local3.png";
import localCampaignImg4 from "../../assets/img/homeLocal/local4.png";
import "../../assets/css/style.scss";

function HomeBestCampaign() {
  return (
    <div className="HomeBestCampaignBorder">
      <div className="HomeBestCampaignList">
        <div className="HomeBestCampaignTitle">
          <span className="BestCampaignTitle">내 인기 캠페인</span>
          <a href="/campaign" className="BestCampaignMoreView">
            더보기 <span>+</span>
          </a>
        </div>
        <ul className="HomeBestList">
          <li className="BestList1">
            <a href="/campaign" className="BestListLink">
              <img
                src={localCampaignImg1}
                className="BestCampaignImg1"
                alt="캠페인이미지1"
              />
              <span className="promotion">
                <span className="recruitType">인스타그램 + 출사단</span>
                <span className="recruitVisit">방문형</span>
                <span className="promotionTitle">[부산/광인리] 행복식당</span>
                <span className="promotionContents">
                  7만원 상당 골라먹자 식사권(회+조개구이+매운탕)
                </span>
                <span className="promotionDday">7일 남음</span>
                <span className="promotionPeriod">
                  리워드 10만원(1팀당 4인 필참입니다)
                </span>
                <span className="promotionCount">
                  <span className="promotionPoint">100,000P</span>
                  신청 0/3명
                </span>
              </span>
            </a>
          </li>
          <li className="BestList2">
            <a href="/campaign" className="BestListLink">
              <img
                src={localCampaignImg2}
                className="BestCampaignImg1"
                alt="캠페인이미지2"
              />
              <span className="promotion">
                <span className="recruitType">인스타그램 + 출사단</span>
                <span className="recruitVisit">방문형</span>
                <span className="promotionTitle">[부산/광인리] 행복식당</span>
                <span className="promotionContents">
                  7만원 상당 골라먹자 식사권(회+조개구이+매운탕)
                </span>
                <span className="promotionDday">7일 남음</span>
                <span className="promotionPeriod">
                  리워드 10만원(1팀당 4인 필참입니다)
                </span>
                <span className="promotionCount">
                  <span className="promotionPoint">100,000P</span>
                  신청 0/3명
                </span>
              </span>
            </a>
          </li>
          <li className="BestList3">
            <a href="/campaign" className="BestListLink">
              <img
                src={localCampaignImg3}
                className="BestCampaignImg1"
                alt="캠페인이미지3"
              />
              <span className="promotion">
                <span className="recruitType">인스타그램 + 출사단</span>
                <span className="recruitVisit">방문형</span>
                <span className="promotionTitle">[부산/광인리] 행복식당</span>
                <span className="promotionContents">
                  7만원 상당 골라먹자 식사권(회+조개구이+매운탕)
                </span>
                <span className="promotionDday">7일 남음</span>
                <span className="promotionPeriod">
                  리워드 10만원(1팀당 4인 필참입니다)
                </span>
                <span className="promotionCount">
                  <span className="promotionPoint">100,000P</span>
                  신청 0/3명
                </span>
              </span>
            </a>
          </li>
          <li className="BestList4">
            <a href="/campaign" className="BestListLink">
              <img
                src={localCampaignImg4}
                className="BestCampaignImg1"
                alt="캠페인이미지4"
              />
              <span className="promotion">
                <span className="recruitType">인스타그램 + 출사단</span>
                <span className="recruitVisit">방문형</span>
                <span className="promotionTitle">[부산/광인리] 행복식당</span>
                <span className="promotionContents">
                  7만원 상당 골라먹자 식사권(회+조개구이+매운탕)
                </span>
                <span className="promotionDday">7일 남음</span>
                <span className="promotionPeriod">
                  리워드 10만원(1팀당 4인 필참입니다)
                </span>
                <span className="promotionCount">
                  <span className="promotionPoint">100,000P</span>
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

export default HomeBestCampaign;
