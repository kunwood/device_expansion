import React from "react";

const Working = () => {
  return (
    <div>
      <div className="h-rem30_0 mt-rem1_0">
        <span className="block text-rem5_0 ml-rem1_0 mb-rem5_0">
          ⚠️ 이 페이지는 현재 접속이 어렵습니다 ⚠️
        </span>
        <button>
          <a href="/" className="text-rem2_0 text-main_color ml-rem15_0">
            되돌아가기
          </a>
        </button>
      </div>
    </div>
  );
};

export default Working;
