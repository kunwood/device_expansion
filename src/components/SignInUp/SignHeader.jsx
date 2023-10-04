import React from "react";
import logo_txt from "../../assets/img/logo_txt.svg";

const SignHeader = () => {
  return (
    <div>
      <div className="z-5 bg-main_color top-0 h-rem0_7 w-full sticky">
        <ul className="list-none flex justify-between items-center pt-rem1_5 px-rem1_5">
          <li>
            <a
              href="/"
              className="bg-transparent flex mx-p4 w-rem2_0 overflow-hidden"
            >
              <img src={logo_txt} className="w-full h-full" alt="logo" />
            </a>
          </li>
          <li className="min-w-fit justify-between flex w-p8 bg-transparent items-center">
            <button
              href=""
              aria-label="alarm"
              className="min-w-fit mr-rem0_2 w-p30 h-full bg-transparent outline-0 border-0 text-white text-rem1_5"
            >
              회원가입
            </button>
            <span className="mr-8 text-rem1_5 text-white font-bold">|</span>
            <button
              href="/"
              aria-label="profile"
              className="min-w-fit mr-rem0_2 w-p30 h-full bg-transparent outline-0 border-0 text-white text-rem1_5"
            >
              로그인
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignHeader;
