import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HomeEventCarousel from "../components/HomeViews/HomeEventCarousel";
import HomeLocalCampaign from "../components/HomeViews/HomeLocalCampaign";
import HomeBestCampaign from "../components/HomeViews/HomeBestCampaign";
import HomeBestPerformer from "../components/HomeViews/HomeBestPerformer";
import { ThemeProvider } from "@material-tailwind/react";
import HomeNewCampaign from "../components/HomeViews/HomeNewCampaign";
import HomeAD from "../components/HomeViews/HomeAD";

const HomeView = () => {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <div className="homeView_container">
          <div className="item HomeAD">
            <HomeAD />
          </div>
          <div className="item HomeLocalCampaign overflow-hidden h-left">
            <HomeLocalCampaign />
          </div>
          <div className="item HomeBestCampaign h-left overflow-hidden">
            <HomeBestCampaign />
          </div>
          <div className="item HomeEventCarousel h-right w-right">
            <HomeEventCarousel />
          </div>
          <div className="item HomeBestPerformer h-right w-right">
            <HomeBestPerformer />
          </div>
          <div className="item HomeNewCampaign h-right w-right">
            <HomeNewCampaign />
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default HomeView;
