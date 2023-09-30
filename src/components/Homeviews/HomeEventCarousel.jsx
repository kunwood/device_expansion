import React, { useState, useEffect } from "react";
import ad1 from "../../assets/img/ad1.svg";
import ad2 from "../../assets/img/ad2.svg";
import ad3 from "../../assets/img/ad3.svg";
/* eslint-disable */
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 이미지와 해당 이미지에 대한 링크 정보를 배열로 정의
  const imagesWithLinks = [
    { image: ad1, link: "/" },
    { image: ad2, link: "/" },
    { image: ad3, link: "/" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % imagesWithLinks.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative object-cover h-full rounded-3xl overflow-hidden z-0 shadow-md">
      {imagesWithLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={item.image}
            alt={`이미지 ${index + 1}`}
            className={`absolute top-0 w-screen transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>
      ))}
    </div>
  );
};

export default Carousel;
