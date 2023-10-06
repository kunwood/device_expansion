import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal"; // 추가
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Addaddress = () => {
  const [zipCode, setZipcode] = useState("");
  const [roadAddress, setRoadAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState(""); // 추가
  const [isOpen, setIsOpen] = useState(false); //추가

  const completeHandler = (data) => {
    setZipcode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setIsOpen(false); //추가
  };

  // Modal 스타일
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "500px",
      height: "400px",
      overflow: "hidden",
      position: "relative",
      paddingTop: "30px",
      paddingLeft: "0",
      paddingRight: "0",
    },
  };

  // 검색 클릭
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // 상세 주소검색 event
  const changeHandler = (e) => {
    setDetailAddress(e.target.value);
  };

  return (
    <div>
      <input
        value={zipCode}
        className="text-rem1_8 h-rem3_0 w-rem10_0 placeholder:text-rem2_0 border-b-2 border-main_color ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 ring-transparent focus:ring-transparent"
        readOnly
        placeholder="우편번호"
      />
      <button
        onClick={toggle}
        className="text-rem1_5 border-main_color border-2 rounded-md ml-5 w-rem10_0 bg-main_color text-white"
      >
        우편번호 검색
      </button>
      <br />
      <input
        value={roadAddress}
        className="mt-5 text-rem1_8 h-rem3_0 w-rem36_0 placeholder:text-rem2_0 border-b-2 border-main_color ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 ring-transparent focus:ring-transparent"
        readOnly
        placeholder="도로명 주소"
      />
      <br />
      <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
        <button
          onClick={toggle}
          style={{
            position: "absolute",
            zIndex: "10",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faX} size="2xl" />
        </button>
        <DaumPostcode onComplete={completeHandler} height="100%" />
      </Modal>
      <input
        type="text"
        className="mt-5 text-rem1_8 h-rem3_0 w-rem36_0 placeholder:text-rem2_0 border-b-2 border-main_color ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 ring-transparent focus:ring-transparent"
        onChange={changeHandler}
        value={detailAddress}
        placeholder="상세주소"
      />
      <br />
    </div>
  );
};

export default Addaddress;
