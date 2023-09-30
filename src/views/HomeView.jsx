import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HomeEventCarousel from "../components/Homeviews/HomeEventCarousel";
import HomeLocalCampaign from "../components/Homeviews/HomeLocalCampaign";
import HomeBestCampaign from "../components/Homeviews/HomeBestCampaign";
import HomeBestPerformer from "../components/Homeviews/HomeBestPerformer";
import { ThemeProvider } from "@material-tailwind/react";
import HomeNewCampaign from "../components/Homeviews/HomeNewCampaign";
import HomeAD from "../components/Homeviews/HomeAD";

const HomeView = () => {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <div className="homeView_container">
          <div className="item HomeAD overflow-hidden">
            <HomeAD />
          </div>
          <div className="item HomeLocalCampaign overflow-hidden h-left">
            <HomeLocalCampaign />
          </div>
          <div className="item HomeBestCampaign h-left overflow-hidden">
            <HomeBestCampaign />
          </div>
          <div className="item HomeEventCarousel h-right">
            <HomeEventCarousel />
          </div>
          <div className="item HomeBestPerformer h-right">
            <HomeBestPerformer />
          </div>
          <div className="item HomeNewCampaign h-right">
            <HomeNewCampaign />
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default HomeView;
