import React from "react";

const SignUp = () => {
  return (
    <div className="mb-[10%]">
      <div className="flex items-center justify-center">
        <div className="w-1/2 h-4/5 p-5 mt-[10%] py-[5%] bg-white rounded-2xl shadow-xl">
          <span className="items-center justify-center flex text-rem3_0 mb-7">
            회원가입
          </span>
          <div className="pl-[20%]">
            <span className="block text-rem1_8">* 전화번호</span>
            <input
              type="text"
              className="inline-block border-2 border-black text-rem1_8 mb-5"
            />
            <button className="inline-block border-2 border-black text-rem1_8 ml-5">
              인증하기
            </button>
            <span className="block text-rem1_8">* 아이디</span>
            <input
              type="text"
              className="inline-block border-2 border-black text-rem1_8 mb-5"
            />
            <span className="block text-rem1_8">* 비밀번호</span>
            <input
              type="text"
              className="inline-block border-2 border-black text-rem1_8 mb-5"
            />
            <span className="block text-rem1_8">* 비밀번호 확인</span>
            <input
              type="text"
              className="inline-block border-2 border-black text-rem1_8 mb-5"
            />
            <span className="block text-rem1_8">* 이름</span>
            <input
              type="text"
              className="inline-block border-2 border-black text-rem1_8 mb-5"
            />
            <span className="block text-rem1_8">* 이메일</span>
            <input
              type="text"
              className="inline-block border-2 border-black text-rem1_8 mb-5"
            />
            <span className="block text-rem1_8">주소</span>
            <input
              type="text"
              className="inline-block border-2 border-black text-rem1_8 mb-5"
            />
            <span className="block text-rem1_8 mb-5">
              <input type="checkbox" name="" id="" />
            </span>
            <span className="block text-rem1_8 mb-5">
              <input type="checkbox" name="" id="" />
            </span>
          </div>
          <span className="flex justify-center text-rem1_8 mb-5">
            <button type="button">회원가입</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
