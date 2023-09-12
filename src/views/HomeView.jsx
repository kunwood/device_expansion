import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import EventCarousel from "../components/Homeviews/EventCarousel";
import CampaignMenu from "../components/Homeviews/CampaignMenu";
import LocalCampaign from "../components/Homeviews/LocalCampaign";
import BestCampaign from "../components/Homeviews/BestCampaign";
import AD from "../components/Homeviews/AD";
import BestPerformer from "../components/Homeviews/BestPerformer";

const HomeView = () => {
  return (
    <div>
      <Header />
      <EventCarousel />
      <CampaignMenu />
      <LocalCampaign />
      <BestCampaign />
      <AD />
      <BestPerformer />
      <Footer />
    </div>
  );
};

export default HomeView;
