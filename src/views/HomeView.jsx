import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HomeEventCarousel from "../components/Homeviews/HomeEventCarousel";
import HomeLocalCampaign from "../components/Homeviews/HomeLocalCampaign";
import HomeBestCampaign from "../components/Homeviews/HomeBestCampaign";
import HomeNewCampaign from "../components/Homeviews/HomeNewCampaign";
import HomeBestPerformer from "../components/Homeviews/HomeBestPerformer";
import { ThemeProvider } from "@material-tailwind/react";

const HomeView = () => {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <div className="homeView_container">
          <div className="item HomeLocalCampaign">
            <HomeLocalCampaign />
          </div>
          <div className="item HomeBestCampaign">
            <HomeBestCampaign />
          </div>
          <div className="item HomeEventCarousel">
            <HomeEventCarousel />
          </div>
          <div className="item HomeBestPerformer">
            <HomeBestPerformer />
          </div>
          <div className="item HomeAD">
            <HomeNewCampaign />
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default HomeView;
