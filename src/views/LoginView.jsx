import React from "react";
import SignHeader from "../components/SignInUp/SignHeader";
import { ThemeProvider } from "@material-tailwind/react";
import SignIn from "../components/SignInUp/SignIn";
import Footer from "../components/common/Footer";

const LoginView = () => {
  return (
    <div>
      <ThemeProvider>
        <SignHeader />
        <SignIn />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default LoginView;
