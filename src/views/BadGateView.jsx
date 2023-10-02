import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { ThemeProvider } from "@material-tailwind/react";
import Working from "../components/Working";

const BadGateView = () => {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <Working />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default BadGateView;
