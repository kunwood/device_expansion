import React from "react";
import SignHeader from "../components/SignInUp/SignHeader";
import { ThemeProvider } from "@material-tailwind/react";
import SignUp from "../components/SignInUp/SignUp";
import Footer from "../components/common/Footer";

const LoginView = () => {
  return (
    <div>
      <ThemeProvider>
        <SignHeader />
        <SignUp />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default LoginView;
