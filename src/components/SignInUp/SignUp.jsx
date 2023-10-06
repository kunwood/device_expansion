import React, { useState } from "react";
import Addaddress from "./Addaddress";

/* eslint-disable */
const SignUp = () => {
  const [id, setId] = useState("");

  const [password, setPassword] = useState("");

  const [isMixedPassword, setIsMixedPassword] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");

  const [matchPassword, setMatchPassword] = useState("");

  const [matchErrorPassword, setMatchErrorPassword] = useState(false);

  const [nickName, setNickName] = useState("");

  const handleNickNameChange = (e) => {
    const newNickName = e.target.value;
    setNickName(newNickName);
  };

  const handleIdChange = (e) => {
    const newId = e.target.value;
    setId(newId);
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(newPhoneNumber);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const hasLetter = /[a-zA-Z]/.test(newPassword);
    const hasNumber = /[0-9]/.test(newPassword);
    setIsMixedPassword(hasLetter && hasNumber);

    if (newPassword != matchPassword) {
      setMatchErrorPassword(true);
    } else {
      setMatchErrorPassword(false);
    }
  };

  const handleMatchPasswordChange = (e) => {
    const newMatchPassword = e.target.value;
    setMatchPassword(newMatchPassword);
    if (password !== newMatchPassword) {
      setMatchErrorPassword(true);
    } else {
      setMatchErrorPassword(false);
    }
  };
  const isInvalidId = id.length > 0 && (id.length < 4 || id.length > 20);
  const isInvalidNickName = nickName.length > 0 && nickName.length < 9;
  const isInvalidPassword = password.length > 0 && password.length < 8;

  return (
    <div className="mb-p10">
      <div className="flex items-center justify-center">
        <div className="w-1/2 h-4/5 p-5 mt-p5 py-p5 bg-white rounded-2xl shadow-xl">
          <legend className="items-center justify-center flex text-rem3_0 mb-7">
            회원가입
          </legend>
          <div className="pl-p23">
            <span className="block text-rem1_8 text-main_color">
              * <span className="opacity-50 text-black">전화번호</span>
            </span>
            <input
              type="text"
              className="inline-block text-rem2_0 mb-6 ml-5 bg-transparent h-full w-p50 outline-0 border-main_color border-b-r0_2 opacity-50 text-black focus:border-main_color focus:opacity-100 focus:transition duration-300 ease-out placeholder:text-3xl"
              placeholder="-없이 숫자만 입력"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <button className="inline-block text-white bg-main_color hover:bg-main_color-500 active:bg-main_color focus:outline-none focus:ring focus:ring-violet-300 rounded-lg text-rem1_8 ml-5 p-2">
              인증하기
            </button>
            <span className="block text-rem1_8 text-main_color">
              * <span className="opacity-50 text-black">아이디</span>
            </span>
            <input
              type="text"
              className={`inline-block text-rem2_0 ml-5 bg-transparent h-full w-p65 outline-0 border-main_color border-b-r0_2 ${
                isInvalidId ? "border-red-500" : "border-main_color"
              } opacity-50 text-black focus:border-main_color focus:opacity-100 focus:transition duration-300 ease-out placeholder:text-3xl`}
              placeholder="4~20자 / 숫자, 문자, 특수문자 사용가능"
              value={id}
              onChange={handleIdChange}
            />
            {isInvalidId && (
              <p className="text-red-500 ml-5">
                아이디는 4 ~ 20자리이어야 합니다.
              </p>
            )}
            <span className="block text-rem1_8 mt-6 text-main_color">
              * <span className="opacity-50 text-black">비밀번호</span>
            </span>
            <input
              type="password"
              className={`inline-block text-rem2_0 ml-5 bg-transparent h-full w-p65 outline-0 border-main_color border-b-r0_2 ${
                isInvalidPassword || !isMixedPassword
                  ? "border-red-500"
                  : "border-main_color"
              } opacity-50 text-black focus:border-main_color focus:opacity-100 focus:transition duration-300 ease-out placeholder:text-3xl`}
              placeholder="8~16자리 / 영문, 숫자, 조합"
              value={password}
              onChange={handlePasswordChange}
            />
            {isInvalidPassword && (
              <p className="text-red-500 ml-5">
                비밀번호는 8자리 이상이어야 합니다.
              </p>
            )}
            {!isMixedPassword && (
              <p className="text-red-500 ml-5">
                비밀번호는 숫자, 영어 조합이어야 합니다.
              </p>
            )}
            <span className="block text-rem1_8 text-main_color mt-6">
              * <span className="opacity-50 text-black">비밀번호 확인</span>
            </span>
            <input
              type="password"
              className={`inline-block text-rem2_0 ml-5 bg-transparent h-full w-p65 outline-0 border-main_color border-b-r0_2 ${
                matchErrorPassword ? "border-red-500" : "border-main_color"
              } opacity-50 text-black focus:border-main_color focus:opacity-100 focus:transition duration-300 ease-out placeholder:text-3xl`}
              value={matchPassword}
              onChange={handleMatchPasswordChange}
            />
            {matchErrorPassword && (
              <p className="text-red-500 ml-5">비밀번호가 일치하지 않습니다.</p>
            )}
            <span className="block text-rem1_8 mt-6 text-main_color">
              * <span className="opacity-50 text-black">이름</span>
            </span>
            <input
              type="text"
              className="inline-block text-rem2_0 mb-6 ml-5 bg-transparent h-full w-p65 outline-0 border-main_color border-b-r0_2 opacity-50 text-black focus:border-main_color focus:opacity-100 focus:transition duration-300 ease-out placeholder:text-3xl"
              placeholder="이름 입력"
            />
            <span className="block text-rem1_8 text-main_color">
              * <span>닉네임</span>
            </span>
            <input
              type="text"
              className={`inline-block text-rem2_0 ml-5 bg-transparent h-full w-p65 outline-0 border-main_color border-b-r0_2 ${
                isInvalidNickName ? "border-main_color" : "border-red-500"
              } opacity-50 text-black focus:border-main_color focus:opacity-100 focus:transition duration-300 ease-out placeholder:text-3xl`}
              placeholder="닉네임은 1~8자리 / 한글, 영문, 숫자 사용가능"
              value={nickName}
              onChange={handleNickNameChange}
            />
            {!isInvalidNickName && (
              <p className="text-red-500 ml-5">
                닉네임은 1자 이상, 8자 이하여야 합니다
              </p>
            )}
            <span className="block text-rem1_8 text-main_color">
              * <span className="opacity-50 text-black">이메일</span>
            </span>
            <input
              type="text"
              className="inline-block text-rem2_0 mb-6 ml-5 bg-transparent h-full w-p30 outline-0 border-main_color border-b-r0_2 opacity-50 text-black focus:border-main_color focus:opacity-100 focus:transition duration-300 ease-out"
            />
            <span className="text-main_color text-rem1_8 ml-2">@</span>
            <input
              type="text"
              className="inline-block text-rem2_0 mb-6 ml-2 bg-transparent h-full w-p30 outline-0 border-main_color border-b-r0_2 opacity-50 text-black focus:border-main_color focus:opacity-100 focus:transition duration-300 ease-out"
            />

            <span className="block text-rem1_8 text-main_color">
              &nbsp;&nbsp;&nbsp;
              <span className="opacity-50 text-black">주소</span>
            </span>
            <div className="m-5">
              <Addaddress />
            </div>
            <span className="block text-rem1_8 mb-6 mt-rem0_3">
              <input type="checkbox" name="" id="" />
              <span className="ml-5 opacity-50 text-black">
                <a href="/badgate" className="underline">
                  서비스 이용약관
                </a>{" "}
                및{" "}
                <a href="/badgate" className="underline">
                  개인정보 취급방침
                </a>{" "}
                동의 (필수)
              </span>
            </span>
            <span className="block text-rem1_8 mb-6">
              <input type="checkbox" name="" id="" />
              <span className="ml-5 opacity-50 text-black">
                카카오톡 알림 수신 동의 (선택)
              </span>
            </span>
            <span className="block text-rem1_8 mb-6">
              <input type="checkbox" name="" id="" />
              <span className="ml-5 opacity-50 text-black">
                푸시알림 수신 동의(선택)
              </span>
            </span>
          </div>
          <span className="flex justify-center text-rem1_8 mb-6">
            <button
              type="button"
              className="inline-block text-white bg-main_color hover:bg-main_color-500 active:bg-main_color focus:outline-none w-rem2_0 rounded-lg text-rem1_8 mt-5 ml-5 p-2"
            >
              회원 가입
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
