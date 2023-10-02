import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { ThemeProvider } from "@material-tailwind/react";
import BestCampaign from "../components/CampaignViews/Local/BestCampaign";
import LocalCampaign from "../components/CampaignViews/Local/LocalCampaign";
import NewCampaign from "../components/CampaignViews/Local/NewCampaign";
import BeautyProduct from "../components/CampaignViews/Product/BeautyProduct";
import ETCProduct from "../components/CampaignViews/Product/ETCProduct";
import FoodProduct from "../components/CampaignViews/Product/FoodProduct";
import LifeProduct from "../components/CampaignViews/Product/LifeProduct";

const CampaignView = () => {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <div>
          <LocalCampaign />
          <BestCampaign />
          <NewCampaign />
        </div>
        <div className="product">
          <BeautyProduct />
          <FoodProduct />
          <LifeProduct />
          <ETCProduct />
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};
export default CampaignView;
